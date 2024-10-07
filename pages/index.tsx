import React, { useState, useEffect } from 'react';  
import { Authenticator } from '@aws-amplify/ui-react';  
import { Amplify } from 'aws-amplify';  
import '@aws-amplify/ui-react/styles.css';  
import { cognitoUserPoolsTokenProvider } from 'aws-amplify/auth/cognito';  
import { defaultStorage } from 'aws-amplify/utils';  
import outputs from '../amplify_outputs.json';  
import { fetchAuthSession } from 'aws-amplify/auth';  

// 配置 AWS Amplify  
Amplify.configure(outputs);  
cognitoUserPoolsTokenProvider.setKeyValueStorage(defaultStorage);  

export default function Home() {  
  const [userEmail, setUserEmail] = useState<string | null>(null);  
  const [identityId, setIdentityId] = useState<string | null>(null);  

  const getSession = async () => {  
    try {  
      const session = await fetchAuthSession();  
      console.log('完整的 session:', session);  
      if (session && session.tokens) {  
        const idToken = session.tokens.idToken;  

        const idTokenString = (idToken && (idToken as any).getJwtToken) ? (idToken as any).getJwtToken() : null;  

        if (idTokenString) {  
          console.log('idToken as string:', idTokenString);  
          await getIdFromCognito(idTokenString);  
        }  
      } else {  
        console.warn('Session 或 tokens 未定義');  
      }  
    } catch (error: unknown) {  
      if (error instanceof Error) {  
        console.error('獲取授權 session 出錯:', error.message);  
      } else {  
        console.error('獲取授權 session 出錯:', error);  
      }  
    }  
  };  

  const getIdFromCognito = async (idToken: string) => {  
    try {  
      const response = await fetch('/api/getId', {  
        method: 'POST',  
        headers: {  
          'Content-Type': 'application/json',  
        },  
        body: JSON.stringify({  
          IdentityPoolId: 'ap-northeast-2:844c51eb-ddfa-4c15-8042-e8cf1b0487fb',  
          LoginProvider: 'cognito-idp.ap-northeast-2.amazonaws.com/ap-northeast-2_CNXJJCt2G',  
          IdToken: idToken,  
        }),  
      });  

      if (response.ok) {  
        const data = await response.json();  
        console.log('GetId Response:', data);  
        if (data.IdentityId) {  
          setIdentityId(data.IdentityId);  
          await getCredentialsFromCognito(data.IdentityId, idToken);  
        }  
      } else {  
        console.error('GetId API 錯誤:', await response.text());  
      }  
    } catch (error: unknown) {  
      if (error instanceof Error) {  
        console.error('調用 GetId API 出錯:', error.message);  
      } else {  
        console.error('調用 GetId API 出錯:', error);  
      }  
    }  
  };  

  const getCredentialsFromCognito = async (identityId: string, idToken: string) => {  
    try {  
      const response = await fetch('/api/getCredentials', {  
        method: 'POST',  
        headers: {  
          'Content-Type': 'application/json',  
        },  
        body: JSON.stringify({  
          IdentityId: identityId,  
          Logins: {  
            'cognito-idp.ap-northeast-2.amazonaws.com/ap-northeast-2_CNXJJCt2G': idToken,  
          },  
        }),  
      });  

      if (response.ok) {  
        const credentialsData = await response.json();  
        console.log('GetCredentials Response:', credentialsData);  

        const { AccessKeyId, SecretKey, SessionToken } = credentialsData.Credentials;  
        await fetch('/api/getStreamingURL', {  
          method: 'POST',  
          headers: { 'Content-Type': 'application/json' },  
          body: JSON.stringify({  
            accessKeyId: AccessKeyId,  
            secretAccessKey: SecretKey,  
            sessionToken: SessionToken,  
            email: userEmail   
          }),  
        }).then(async (res) => {  
          if (res.ok) {  
            const data = await res.json();  
            console.log(`Streaming URL received: ${data.streamingUrl}`);  
            window.location.href = data.streamingUrl;  
          } else {  
            console.error('錯誤:', await res.text());  
          }  
        });  

      } else {  
        console.error('GetCredentials API 錯誤:', await response.text());  
      }  
    } catch (error: unknown) {  
      if (error instanceof Error) {  
        console.error('調用 GetCredentials API 出錯:', error.message);  
      } else {  
        console.error('調用 GetCredentials API 出錯:', error);  
      }  
    }  
  };  

  useEffect(() => {  
    if (userEmail) {  
      getSession();  
    }  
  }, [userEmail]);  

  const handleLogin = async () => {  
    if (userEmail) {  
      try {  
        await getSession();   
      } catch (error: unknown) {  
        if (error instanceof Error) {  
          console.error('獲取串流 URL 失敗:', error.message);  
        } else {  
          console.error('獲取串流 URL 失敗:', error);  
        }  
      }  
    }  
  };  

  const handleSignOut = (signOut: () => void = () => {}) => {  
    localStorage.removeItem('authToken');  
    sessionStorage.clear();  
    setUserEmail(null);  
    setIdentityId(null);  
    signOut();  
  };  

  return (  
    <Authenticator hideSignUp>  
      {({ signOut, user }) => {  
        if (user) {  
          const email = user.signInDetails?.loginId;  
          if (email && userEmail !== email) {  
            setUserEmail(email);  
          }  
        }  
        
        return (  
          <main>  
            <p>User email: {userEmail !== null ? userEmail : 'Loading...'}</p>  
            <div className="flex flex-col space-y-4">  
              <button onClick={handleLogin} className="btn">  
                登入並獲取串流 URL  
              </button>  
              <button onClick={() => handleSignOut(signOut)} className="btn">  
                登出  
              </button>  
            </div>  
          </main>  
        );  
      }}  
    </Authenticator>  
  );  
}
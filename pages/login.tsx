import React, { useState, useEffect } from 'react';  
import { Authenticator } from '@aws-amplify/ui-react';  
import { Amplify } from 'aws-amplify';  
import '@aws-amplify/ui-react/styles.css';  
import { cognitoUserPoolsTokenProvider } from 'aws-amplify/auth/cognito';  
import { defaultStorage } from 'aws-amplify/utils';  
import outputs from '../amplify_outputs.json';  
import { fetchAuthSession } from 'aws-amplify/auth';  
import { useRouter } from 'next/router';  

// 配置 AWS Amplify  
Amplify.configure(outputs);  
cognitoUserPoolsTokenProvider.setKeyValueStorage(defaultStorage);  

export default function Login() {  
  const router = useRouter();  
  const [userEmail, setUserEmail] = useState<string | null>(null);  
  const [credentials, setCredentials] = useState<any>(null);  

  const getSession = async () => {  
    try {  
      const session = await fetchAuthSession();  
      console.log('完整的 session:', session);  
      if (session && session.credentials) {  
        const credentialsData = session.credentials;  
        console.log('提取的憑證:', credentialsData);  
        // 檢查憑證的結構  
        if (!credentialsData.accessKeyId || !credentialsData.secretAccessKey || !credentialsData.sessionToken) {  
          console.error('憑證缺少必要的屬性');  
          return;  
        }  
        setCredentials(credentialsData);  
      } else {  
        console.warn('Session 或 credentials 未定義');  
      }  
    } catch (error) {  
      console.error('獲取授權 session 出錯:', error);  
    }  
  };  

  useEffect(() => {  
    if (userEmail) {  
      console.log('用戶電子郵件在 useEffect 中:', userEmail);  
      getSession();  
    } else {  
      console.log('用戶電子郵件未設置');  
    }  
  }, [userEmail]);  

  const handleLogin = async () => {  
    if (userEmail && credentials) {  
      console.log('用戶電子郵件:', userEmail);  
      console.log('傳入的 Credentials:', credentials);  
      try {  
        const response = await fetch('/api/getStreamingURL', {  
          method: 'POST',  
          headers: {  
            'Content-Type': 'application/json',  
          },  
          body: JSON.stringify({  
            email: userEmail,  
            credentials: {  
              accessKeyId: credentials.accessKeyId,  
              secretAccessKey: credentials.secretAccessKey,  
              sessionToken: credentials.sessionToken,  
            },  
          }),  
        });  

        if (response.ok) {  
          const data = await response.json();  
          console.log('生成的 Streaming URL:', data.streamingUrl);  
          window.location.href = data.streamingUrl;  
        } else {  
          const data = await response.json();  
          console.error('錯誤:', data.error);  
        }  
      } catch (error) {  
        console.error('獲取串流 URL 失敗:', error);  
      }  
    } else {  
      console.error('用戶電子郵件或憑證缺失');  
      console.log('當前用戶電子郵件:', userEmail);  
      console.log('當前憑證:', credentials);  
    }  
  };  

  const handleSignOut = (signOut: () => void = () => {}) => {  
    localStorage.removeItem('authToken');  
    sessionStorage.clear();  
    setUserEmail(null);  
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
          <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">  
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">  
              <h1 className="text-2xl font-bold text-center mb-6">歡迎回來！</h1>  
              <p className="text-center text-gray-600 mb-4">用戶電子郵件: {userEmail !== null ? userEmail : '加載中...'}</p>  
              <div className="flex flex-col space-y-6">  
                <button onClick={handleLogin} className="btn bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">  
                  登入並獲取串流 URL  
                </button>  
                <button onClick={() => handleSignOut(signOut)} className="btn bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">  
                  登出  
                </button>  
              </div>  
            </div>  
          </main>  
        );  
      }}  
    </Authenticator>  
  );  
}





// import React, { useState, useEffect } from 'react';  
// import { Authenticator } from '@aws-amplify/ui-react';  
// import { Amplify } from 'aws-amplify';  
// import '@aws-amplify/ui-react/styles.css';  
// import { cognitoUserPoolsTokenProvider } from 'aws-amplify/auth/cognito';  
// import { defaultStorage } from 'aws-amplify/utils';  
// import outputs from '../amplify_outputs.json';  
// import { fetchAuthSession } from 'aws-amplify/auth';  
// import { useRouter } from 'next/router';  

// // 配置 AWS Amplify  
// Amplify.configure(outputs);  
// cognitoUserPoolsTokenProvider.setKeyValueStorage(defaultStorage);  

// export default function Login() {  
//   const router = useRouter();  
//   const [userEmail, setUserEmail] = useState<string | null>(null);  
//   const [credentials, setCredentials] = useState<any>(null);  
//   const [copyMessage, setCopyMessage] = useState<string | null>(null); // 新增狀態來顯示複製消息  

//   const getSession = async () => {  
//     try {  
//       const session = await fetchAuthSession();  
//       console.log('完整的 session:', session);  
//       if (session && session.credentials) {  
//         const credentialsData = session.credentials;  
//         console.log('提取的憑證:', credentialsData);  
//         if (!credentialsData.accessKeyId || !credentialsData.secretAccessKey || !credentialsData.sessionToken) {  
//           console.error('憑證缺少必要的屬性');  
//           return;  
//         }  
//         setCredentials(credentialsData);  
//       } else {  
//         console.warn('Session 或 credentials 未定義');  
//       }  
//     } catch (error) {  
//       console.error('獲取授權 session 出錯:', error);  
//     }  
//   };  

//   useEffect(() => {  
//     if (userEmail) {  
//       console.log('用戶電子郵件在 useEffect 中:', userEmail);  
//       getSession();  
//     } else {  
//       console.log('用戶電子郵件未設置');  
//     }  
//   }, [userEmail]);  

//   const handleLogin = async () => {  
//     if (userEmail && credentials) {  
//       console.log('用戶電子郵件:', userEmail);  
//       console.log('傳入的 Credentials:', credentials);  
//       try {  
//         const response = await fetch('/api/getWebStreamingURL', {  
//           method: 'POST',  
//           headers: {  
//             'Content-Type': 'application/json',  
//           },  
//           body: JSON.stringify({  
//             email: userEmail,  
//             credentials: {  
//               accessKeyId: credentials.accessKeyId,  
//               secretAccessKey: credentials.secretAccessKey,  
//               sessionToken: credentials.sessionToken,  
//             },  
//           }),  
//         });  

//         if (response.ok) {  
//           const data = await response.json();  
//           console.log('生成的 Web Streaming URL:', data.streamingUrl);  
//           window.location.href = data.streamingUrl;  
//         } else {  
//           const data = await response.json();  
//           console.error('錯誤:', data.error);  
//         }  
//       } catch (error) {  
//         console.error('獲取 Web 串流 URL 失敗:', error);  
//       }  
//     } else {  
//       console.error('用戶電子郵件或憑證缺失');  
//       console.log('當前用戶電子郵件:', userEmail);  
//       console.log('當前憑證:', credentials);  
//     }  
//   };  

//   const handleAppLogin = async () => {  
//     if (userEmail && credentials) {  
//       console.log('用戶電子郵件:', userEmail);  
//       console.log('傳入的 Credentials:', credentials);  
//       try {  
//         const response = await fetch('/api/getAppStreamingURL', {  
//           method: 'POST',  
//           headers: {  
//             'Content-Type': 'application/json',  
//           },  
//           body: JSON.stringify({  
//             email: userEmail,  
//             credentials: {  
//               accessKeyId: credentials.accessKeyId,  
//               secretAccessKey: credentials.secretAccessKey,  
//               sessionToken: credentials.sessionToken,  
//             },  
//           }),  
//         });  

//         if (response.ok) {  
//           const data = await response.json();  
//           console.log('生成的 APP Streaming URL:', data.streamingUrl);  
          
//           // 自動複製生成的 APP Streaming URL 到剪貼簿  
//           await navigator.clipboard.writeText(data.streamingUrl);  
//           console.log('已複製 APP Streaming URL 到剪貼簿:', data.streamingUrl);  
          
//           // 顯示複製成功的消息  
//           setCopyMessage('已成功複製 APP Streaming URL，請貼至APP！');  
//           setTimeout(() => setCopyMessage(null), 20000); // 20秒後自動隱藏消息  
          
//           // 將 URL 的開頭改為 amazonappstream:  
//           const appStreamingUrl = data.streamingUrl.replace(/^http/, 'amazonappstream:');  
          
//           // 檢查當前環境是否能抓到 amazonappstream:  
//           if (appStreamingUrl.startsWith('amazonappstream:')) {  
//             // 跳轉到 APP Streaming URL  
//             window.location.href = appStreamingUrl;  
//           } else {  
//             // 顯示失敗的消息  
//             setCopyMessage('無法調用 Amazon Appstream 應用程式，請檢查環境設置！');  
//             setTimeout(() => setCopyMessage(null), 20000); // 20秒後自動隱藏消息  
//           }  
//         } else {  
//           const data = await response.json();  
//           console.error('錯誤:', data.error);  
//         }  
//       } catch (error) {  
//         console.error('獲取 APP 串流 URL 失敗:', error);  
//       }  
//     } else {  
//       console.error('用戶電子郵件或憑證缺失');  
//       console.log('當前用戶電子郵件:', userEmail);  
//       console.log('當前憑證:', credentials);  
//     }  
//   };  

//   const handleSignOut = (signOut: () => void = () => {}) => {  
//     localStorage.removeItem('authToken');  
//     sessionStorage.clear();  
//     setUserEmail(null);  
//     signOut();  
//   };  

//   return (  
//     <Authenticator hideSignUp>  
//       {({ signOut, user }) => {  
//         if (user) {  
//           const email = user.signInDetails?.loginId;  
//           if (email && userEmail !== email) {  
//             setUserEmail(email);  
//           }  
//         }  

//         const userName = userEmail ? userEmail.split('@')[0] : '';  

//         return (  
//           <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">  
//             <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md">  
//               <h1 className="text-2xl font-bold text-center mb-4">{userName}，歡迎回來！</h1>  
//               <p className="text-center text-gray-600 mb-2">用戶電子郵件: {userEmail !== null ? userEmail : '加載中...'}</p>  
//               {copyMessage && ( // 顯示複製消息  
//                 <div className="bg-green-100 text-green-700 p-2 rounded mt-4 mb-4 text-center">  
//                   {copyMessage}  
//                 </div>  
//               )}  
//               <div className="flex flex-col space-y-4 mt-6">  
//                 <button onClick={handleLogin} className="btn bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition w-full">  
//                   登入Web模式  
//                 </button>  
//                 <button onClick={handleAppLogin} className="btn bg-green-500 text-white py-2 rounded hover:bg-green-600 transition w-full">  
//                   登入APP模式  
//                 </button>  
//                 <button onClick={() => handleSignOut(signOut)} className="btn bg-red-500 text-white py-2 rounded hover:bg-red-600 transition w-full">  
//                   登出  
//                 </button>  
//               </div>  
//             </div>  
//           </main>  
//         );  
//       }}  
//     </Authenticator>  
//   );  
// }


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
  const [copyMessage, setCopyMessage] = useState<string | null>(null); // 新增狀態來顯示複製消息  

  const getSession = async () => {  
    try {  
      const session = await fetchAuthSession();  
      // console.log('完整的 session:', session);  
      if (session && session.credentials) {  
        const credentialsData = session.credentials;  
        // console.log('提取的憑證:', credentialsData);  
        if (!credentialsData.accessKeyId || !credentialsData.secretAccessKey || !credentialsData.sessionToken) {  
          // console.error('憑證缺少必要的屬性');  
          return;  
        }  
        setCredentials(credentialsData);  
      } else {  
        // console.warn('Session 或 credentials 未定義');  
      }  
    } catch (error) {  
      // console.error('獲取授權 session 出錯:', error);  
    }  
  };  

  useEffect(() => {  
    if (userEmail) {  
      // console.log('用戶電子郵件在 useEffect 中:', userEmail);  
      getSession();  
    } else {  
      // console.log('用戶電子郵件未設置');  
    }  
  }, [userEmail]);  

  const handleLogin = async () => {  
    if (userEmail && credentials) {  
      // console.log('用戶電子郵件:', userEmail);  
      // console.log('傳入的 Credentials:', credentials);  
      try {  
        const response = await fetch('/api/getWebStreamingURL', {  
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
          // console.log('生成的 Web Streaming URL:', data.streamingUrl);  
          window.location.href = data.streamingUrl;  
        } else {  
          const data = await response.json();  
          // console.error('錯誤:', data.error);  
        }  
      } catch (error) {  
        // console.error('獲取 Web 串流 URL 失敗:', error);  
      }  
    } else {  
      // console.error('用戶電子郵件或憑證缺失');  
      // console.log('當前用戶電子郵件:', userEmail);  
      // console.log('當前憑證:', credentials);  
    }  
  };  

  const handleAppLogin = async () => {  
    if (userEmail && credentials) {  
      // console.log('用戶電子郵件:', userEmail);  
      // console.log('傳入的 Credentials:', credentials);  
      try {  
        const response = await fetch('/api/getAppStreamingURL', {  
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
          // console.log('生成的 APP Streaming URL:', data.streamingUrl);  
          
          // 自動複製生成的 APP Streaming URL 到剪貼簿  
          await navigator.clipboard.writeText(data.streamingUrl);  
          // console.log('已複製 APP Streaming URL 到剪貼簿:', data.streamingUrl);  
          
          // 顯示複製成功的消息  
          setCopyMessage('已成功複製 APP Streaming URL，請貼至APP！');  
          setTimeout(() => setCopyMessage(null), 20000); // 20秒後自動隱藏消息  
          
          // 將 URL 的開頭改為 amazonappstream:  
          const appStreamingUrl = data.streamingUrl.replace(/^http/, 'amazonappstream:');  
          
          // 檢查當前環境是否能抓到 amazonappstream:  
          if (appStreamingUrl.startsWith('amazonappstream:')) {  
            // 跳轉到 APP Streaming URL  
            window.location.href = appStreamingUrl;  
          } else {  
            // 顯示失敗的消息  
            setCopyMessage('無法調用 Amazon Appstream 應用程式，請檢查環境設置！');  
            setTimeout(() => setCopyMessage(null), 20000); // 20秒後自動隱藏消息  
          }  
        } else {  
          const data = await response.json();  
          // console.error('錯誤:', data.error);  
        }  
      } catch (error) {  
        // console.error('獲取 APP 串流 URL 失敗:', error);  
      }  
    } else {  
      // console.error('用戶電子郵件或憑證缺失');  
      // console.log('當前用戶電子郵件:', userEmail);  
      // console.log('當前憑證:', credentials);  
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

        const userName = userEmail ? userEmail.split('@')[0] : '';  

        return (  
          <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">  
            <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md">  
              <h1 className="text-2xl font-bold text-center mb-4">{userName}，歡迎回來！</h1>  
              <p className="text-center text-gray-600 mb-2">用戶電子郵件: {userEmail !== null ? userEmail : '加載中...'}</p>  
              {copyMessage && ( // 顯示複製消息  
                <div className="bg-green-100 text-green-700 p-2 rounded mt-4 mb-4 text-center">  
                  {copyMessage}  
                </div>  
              )}  
              <div className="flex flex-col space-y-4 mt-6">  
                <button onClick={handleLogin} className="btn bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition w-full">  
                  登入Web模式  
                </button>  
                <button onClick={handleAppLogin} className="btn bg-green-500 text-white py-2 rounded hover:bg-green-600 transition w-full">  
                  登入APP模式  
                </button>  
                <button onClick={() => handleSignOut(signOut)} className="btn bg-red-500 text-white py-2 rounded hover:bg-red-600 transition w-full">  
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
// 檢索當前經過身份驗證的使用者
// -----
// import { useEffect } from 'react';  
// import { getCurrentUser } from 'aws-amplify/auth';  

// const HomePage = () => {  
//   useEffect(() => {  
//     const fetchUserDetails = async () => {  
//       try {  
//         // 調用 getCurrentUser() 函數並記錄整個用戶信息對象  
//         const userDetails = await getCurrentUser();  

//         // 將整個用戶詳細信息對象記錄到控制台  
//         console.log('User Details:', userDetails);  
//       } catch (error) {  
//         console.error('Error fetching user details:', error);  
//       }  
//     };  

//     // 調用函數以獲取和記錄用戶信息  
//     fetchUserDetails();  
//   }, []); // 空依賴陣列確保只在組件掛載時運行一次  

//   return (  
//     <div>  
//       <h1>Welcome to the Home Page</h1>  
//       <p>Check the console for user details.</p>  
//     </div>  
//   );  
// };  

// export default HomePage;



// 檢索用戶會話
// -------
// import { useEffect } from 'react';  
// import { fetchAuthSession } from 'aws-amplify/auth';  

// const HomePage = () => {  
//   useEffect(() => {  
//     const fetchSessionDetails = async () => {  
//       try {  
//         // 調用 fetchAuthSession() 函數並記錄整個會話信息對象  
//         const sessionDetails = await fetchAuthSession();  

//         // 將整個會話詳細信息對象記錄到控制台  
//         console.log('Session Details:', sessionDetails);  
//       } catch (error) {  
//         console.error('Error fetching session details:', error);  
//       }  
//     };  

//     // 調用函數以獲取和記錄會話信息  
//     fetchSessionDetails();  
//   }, []); // 空依賴陣列確保只在組件掛載時運行一次  

//   return (  
//     <div>  
//       <h1>Welcome to the Home Page</h1>  
//       <p>Check the console for session details.</p>  
//     </div>  
//   );  
// };  

// export default HomePage;



// 檢索用戶屬性
// ---------
// import { useEffect } from 'react';  
// import { fetchUserAttributes } from 'aws-amplify/auth';  

// const HomePage = () => {  
//   useEffect(() => {  
//     const fetchAttributes = async () => {  
//       try {  
//         // 調用 fetchUserAttributes() 函數並記錄整個用戶屬性對象  
//         const userAttributes = await fetchUserAttributes();  

//         // 將整個用戶屬性對象記錄到控制台  
//         console.log('User Attributes:', userAttributes);  
//       } catch (error) {  
//         console.error('Error fetching user attributes:', error);  
//       }  
//     };  

//     // 調用函數以獲取和記錄用戶屬性  
//     fetchAttributes();  
//   }, []); // 空依賴陣列確保只在組件掛載時運行一次  

//   return (  
//     <div>  
//       <h1>Welcome to the Home Page</h1>  
//       <p>Check the console for user attributes.</p>  
//     </div>  
//   );  
// };  

// export default HomePage;


// pages/api/getId.js
// import {
//   CognitoIdentityClient,
//   GetIdCommand,
// } from "@aws-sdk/client-cognito-identity";

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     res.setHeader("Allow", ["POST"]);
//     return res.status(405).end(`Method ${req.method} Not Allowed`);
//   }

//   // 提取請求體中的參數
//   const { IdentityPoolId, LoginProvider, IdToken } = req.body;

//   const client = new CognitoIdentityClient({ region: "ap-northeast-2" });

//   try {
//     const command = new GetIdCommand({
//       IdentityPoolId: IdentityPoolId,
//       Logins: {
//         [LoginProvider]: IdToken,
//       },
//     });

//     const data = await client.send(command);
//     console.log("Retrieved Identity ID data:", data);
//     res.status(200).json(data);
//   } catch (error) {
//     console.error("Detailed error while retrieving identity ID:", error);
//     res.status(500).json({ error: "Error retrieving identity ID" });
//   }
// }

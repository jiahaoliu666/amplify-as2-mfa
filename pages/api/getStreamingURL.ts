// import { NextApiRequest, NextApiResponse } from 'next';  
// import AWS from 'aws-sdk';  

// AWS.config.update({ region: 'ap-northeast-1' });  

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {  
//   const appstream = new AWS.AppStream();  

//   // 從請求查詢獲取參數，並設置默認值  
//   const userEmail = req.query.email || 'default_test_user@example.com';  
//   const stackName = req.query.stackName || 'Desktop';  
//   const fleetName = req.query.fleetName || 'Desktop';  

//   try {  
//     // 調用 createStreamingURL 並使用正確的參數名稱  
//     const response = await appstream.createStreamingURL({  
//       StackName: stackName as string,  // 確保將 StackName 正確傳遞及使用類型註解  
//       FleetName: fleetName as string,  // 確保將 FleetName 正確傳遞及使用類型註解  
//       UserId: userEmail as string,     // 確保將 UserId 正確傳遞及使用類型註解  
//       Validity: 3600,  
//     }).promise();  

//     const streamingUrl = response.StreamingURL;  
//     console.log(`Streaming URL generated for ${userEmail}: ${streamingUrl}`);  

//     res.json({ streamingUrl }); // 返回 JSON 包含 URL  
//   } catch (error) {  
//     console.error(`Error generating streaming URL for ${userEmail}: ${(error as Error).message}`);  
//     res.status(500).json({ error: (error as Error).message });  
//   }  
// }

import { NextApiRequest, NextApiResponse } from 'next';  
import AWS from 'aws-sdk';  

AWS.config.update({ region: 'ap-northeast-1' });  

export default async function handler(req: NextApiRequest, res: NextApiResponse) {  
  if (req.method !== 'POST') {  
    res.setHeader('Allow', ['POST']);  
    return res.status(405).end(`Method ${req.method} Not Allowed`);  
  }  

  const { accessKeyId, secretAccessKey, sessionToken, email } = req.body;  

  if (!accessKeyId || !secretAccessKey || !sessionToken || !email) {  
    return res.status(400).json({ error: 'Missing required parameters' });  
  }  

  AWS.config.credentials = new AWS.Credentials(accessKeyId, secretAccessKey, sessionToken);  

  const appstream = new AWS.AppStream();  

  const stackName = 'Desktop';  
  const fleetName = 'Desktop';  

  try {  
    const { StreamingURL } = await appstream.createStreamingURL({  
      StackName: stackName,  
      FleetName: fleetName,  
      UserId: email,  
      Validity: 3600,  
    }).promise();  

    if (StreamingURL) {  
      console.log(`Streaming URL generated for ${email}: ${StreamingURL}`);  
      res.status(200).json({ streamingUrl: StreamingURL });  
    } else {  
      res.status(500).json({ error: 'No Streaming URL received' });  
    }  
  } catch (error: unknown) {  
    if (error instanceof Error) {  
      console.error(`Error generating streaming URL for ${email}: ${error.message}`);  
      res.status(500).json({ error: error.message });  
    } else {  
      console.error('未預期的錯誤:', error);  
      res.status(500).json({ error: '發生未知錯誤' });  
    }  
  }  
}
// import { NextApiRequest, NextApiResponse } from 'next';  
// import { AppStreamClient, CreateStreamingURLCommand } from '@aws-sdk/client-appstream';  

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {  
//   if (req.method !== 'POST') {  
//     res.setHeader('Allow', ['POST']);  
//     return res.status(405).end(`Method ${req.method} Not Allowed`);  
//   }  

//   const { email, credentials } = req.body;  

//   if (!email || !credentials) {  
//     console.error('缺少必要的參數 email 或 credentials');  
//     return res.status(400).json({ error: '缺少必要的參數' });  
//   }  

//   try {  
//     const client = new AppStreamClient({  
//       region: 'ap-northeast-1',  
//       credentials: {  
//         accessKeyId: credentials.accessKeyId,  
//         secretAccessKey: credentials.secretAccessKey,  
//         sessionToken: credentials.sessionToken,  
//       },  
//     });  

//     const stackName = 'Desktop';  
//     const fleetName = 'Desktop';  

//     const input = {  
//       StackName: stackName,  
//       FleetName: fleetName,  
//       UserId: email,  
//       Validity: 3600,  
//     };  

//     const command = new CreateStreamingURLCommand(input);  
//     const response = await client.send(command);  

//     const streamingUrl = response.StreamingURL;  
//     console.log(`APP Streaming URL 生成成功：${streamingUrl}`);  

//     res.json({ streamingUrl });  
//   } catch (error) {  
//     if (error instanceof Error) {  
//       console.error(`生成 APP 串流 URL 發生錯誤，電子郵件: ${email}`, error);  
//       res.status(500).json({ error: error.message || '生成 APP 串流 URL 時發生錯誤' });  
//     } else {  
//       console.error(`生成 APP 串流 URL 發生未知錯誤，電子郵件: ${email}`, error);  
//       res.status(500).json({ error: '生成 APP 串流 URL 時發生未知錯誤' });  
//     }  
//   }  
// }


import { NextApiRequest, NextApiResponse } from 'next';  
import { AppStreamClient, CreateStreamingURLCommand } from '@aws-sdk/client-appstream';  

export default async function handler(req: NextApiRequest, res: NextApiResponse) {  
  if (req.method !== 'POST') {  
    res.setHeader('Allow', ['POST']);  
    return res.status(405).end(`Method ${req.method} Not Allowed`);  
  }  

  const { email, credentials } = req.body;  

  if (!email || !credentials) {  
    // console.error('缺少必要的參數 email 或 credentials');  
    return res.status(400).json({ error: '缺少必要的參數' });  
  }  

  try {  
    const client = new AppStreamClient({  
      region: 'ap-northeast-1',  
      credentials: {  
        accessKeyId: credentials.accessKeyId,  
        secretAccessKey: credentials.secretAccessKey,  
        sessionToken: credentials.sessionToken,  
      },  
    });  

    const stackName = 'Desktop';  
    const fleetName = 'Desktop';  

    const input = {  
      StackName: stackName,  
      FleetName: fleetName,  
      UserId: email,  
      Validity: 3600,  
    };  

    const command = new CreateStreamingURLCommand(input);  
    const response = await client.send(command);  

    const streamingUrl = response.StreamingURL;  
    // console.log(`APP Streaming URL 生成成功：${streamingUrl}`);  

    res.json({ streamingUrl });  
  } catch (error) {  
    if (error instanceof Error) {  
      // console.error(`生成 APP 串流 URL 發生錯誤，電子郵件: ${email}`, error);  
      res.status(500).json({ error: error.message || '生成 APP 串流 URL 時發生錯誤' });  
    } else {  
      // console.error(`生成 APP 串流 URL 發生未知錯誤，電子郵件: ${email}`, error);  
      res.status(500).json({ error: '生成 APP 串流 URL 時發生未知錯誤' });  
    }  
  }  
}
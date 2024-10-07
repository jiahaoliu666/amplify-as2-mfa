import { NextApiRequest, NextApiResponse } from 'next';  
import AWS from 'aws-sdk';  

export default async function handler(req: NextApiRequest, res: NextApiResponse) {  
  if (req.method !== 'POST') {  
    res.setHeader('Allow', ['POST']);  
    return res.status(405).end(`Method ${req.method} Not Allowed`);  
  }  

  const { email, credentials } = req.body;  

  if (!email || !credentials) {  
    console.error('缺少必要的參數 email 或 credentials');  
    return res.status(400).json({ error: '缺少必要的參數' });  
  }   

  try {   
    // 配置 AWS SDK  
    AWS.config.update({  
      region: 'ap-northeast-1', // 設置實際區域  
      accessKeyId: credentials.AccessKeyId,  
      secretAccessKey: credentials.SecretKey,  
      sessionToken: credentials.SessionToken,  
    });  

    const appstream = new AWS.AppStream();  

    const stackName = req.query.stackName || 'Desktop';   
    const fleetName = req.query.fleetName || 'Desktop';   

    // 調用 AWS 服務以生成 Streaming URL  
    const response = await appstream.createStreamingURL({  
      StackName: stackName as string,  
      FleetName: fleetName as string,  
      UserId: email,  
      Validity: 3600,  
    }).promise();  

    const streamingUrl = response.StreamingURL;  
    console.log(`Streaming URL 生成成功：${streamingUrl}`);  

    res.json({ streamingUrl }); // 返回包含 Streaming URL 的 JSON  
  } catch (error: any) {  
    console.error(`生成串流 URL 發生錯誤, 電子郵件: ${email}`, error);  
    res.status(500).json({ error: error.message || '生成串流 URL 時發生錯誤' });  
  }  
}
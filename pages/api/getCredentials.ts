// import {  
//   CognitoIdentityClient,  
//   GetCredentialsForIdentityCommand,  
//   GetCredentialsForIdentityCommandInput,  
//   GetCredentialsForIdentityCommandOutput,  
// } from "@aws-sdk/client-cognito-identity";  
// import { NextApiRequest, NextApiResponse } from "next";  

// export default async function handler(  
//   req: NextApiRequest,  
//   res: NextApiResponse  
// ) {  
//   if (req.method !== "POST") {  
//     res.setHeader("Allow", ["POST"]);  
//     return res.status(405).end(`Method ${req.method} Not Allowed`);  
//   }  

//   const { IdentityId, Logins } = req.body as {  
//     IdentityId: string;  
//     Logins: { [key: string]: string };  
//   };  

//   const client = new CognitoIdentityClient({ region: "ap-northeast-2" });  

//   try {  
//     const commandInput: GetCredentialsForIdentityCommandInput = {  
//       IdentityId,  
//       Logins,  
//     };  

//     const command = new GetCredentialsForIdentityCommand(commandInput);  

//     const credentials: GetCredentialsForIdentityCommandOutput = await client.send(command);  
//     console.log("Retrieved Credentials for Identity:", credentials);  
//     res.status(200).json(credentials);  
//   } catch (error) {  
//     console.error("Detailed error while retrieving credentials:", error);  
//     res.status(500).json({ error: "Error retrieving credentials" });  
//   }  
// }


import { NextApiRequest, NextApiResponse } from 'next';  
import AWS from 'aws-sdk';  

AWS.config.update({ region: 'ap-northeast-2' });  

export default async function handler(req: NextApiRequest, res: NextApiResponse) {  
  if (req.method !== 'POST') {  
    res.setHeader('Allow', ['POST']);  
    return res.status(405).end(`Method ${req.method} Not Allowed`);  
  }  

  const { IdentityId, Logins } = req.body;  

  if (!IdentityId || !Logins) {  
    return res.status(400).json({ error: 'Missing required parameters' });  
  }  

  const cognitoIdentityService = new AWS.CognitoIdentity();  

  try {  
    const { Credentials } = await cognitoIdentityService.getCredentialsForIdentity({  
      IdentityId,  
      Logins,  
    }).promise();  

    if (Credentials) {  
      console.log(`Credentials fetched for identity ID ${IdentityId}`);  
      res.status(200).json({ Credentials });  
    } else {  
      res.status(500).json({ error: 'Failed to retrieve credentials' });  
    }  
  } catch (error: unknown) {  
    if (error instanceof Error) {  
      console.error(`Error getting credentials for ${IdentityId}: ${error.message}`);  
      res.status(500).json({ error: error.message });  
    } else {  
      console.error('未預期的錯誤:', error);  
      res.status(500).json({ error: '發生未知錯誤' });  
    }  
  }  
}
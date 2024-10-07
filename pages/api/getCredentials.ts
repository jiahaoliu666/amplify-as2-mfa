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
//       res.setHeader("Allow", ["POST"]);  
//       return res.status(405).end(`Method ${req.method} Not Allowed`);  
//   }  

//   const { IdentityId, Logins } = req.body as {  
//       IdentityId: string;  
//       Logins: { [key: string]: string };  
//   };  

//   const client = new CognitoIdentityClient({ region: "ap-northeast-2" });  

//   try {  
//       const commandInput: GetCredentialsForIdentityCommandInput = {  
//           IdentityId,  
//           Logins,  
//       };  

//       const command = new GetCredentialsForIdentityCommand(commandInput);  

//       const credentials: GetCredentialsForIdentityCommandOutput = await client.send(command);  
//       console.log("Retrieved Credentials for Identity:", credentials);  
//       res.status(200).json(credentials);  
//   } catch (error) {  
//       console.error("Detailed error while retrieving credentials:", error);  
//       res.status(500).json({ error: "Error retrieving credentials" });  
//   }  
// }


import {  
  CognitoIdentityClient,  
  GetCredentialsForIdentityCommand,  
  GetCredentialsForIdentityCommandInput,  
  GetCredentialsForIdentityCommandOutput,  
} from "@aws-sdk/client-cognito-identity";  
import {  
  AppStreamClient,  
  CreateStreamingURLCommand,  
} from "@aws-sdk/client-appstream"; // 引入 AppStream 客戶端  
import { NextApiRequest, NextApiResponse } from "next";  

export default async function handler(  
  req: NextApiRequest,  
  res: NextApiResponse  
) {  
  if (req.method !== "POST") {  
      res.setHeader("Allow", ["POST"]);  
      return res.status(405).end(`Method ${req.method} Not Allowed`);  
  }  

  const { IdentityId, Logins, StackName, FleetName, UserId, ApplicationId, Validity, SessionContext } = req.body as {  
      IdentityId: string;  
      Logins: { [key: string]: string };  
      StackName: string; // 新增 StackName  
      FleetName: string; // 新增 FleetName  
      UserId: string; // 新增 UserId  
      ApplicationId?: string; // 新增 ApplicationId  
      Validity?: number; // 新增 Validity  
      SessionContext?: string; // 新增 SessionContext  
  };  

  const cognitoClient = new CognitoIdentityClient({ region: "ap-northeast-2" });  

  try {  
      const commandInput: GetCredentialsForIdentityCommandInput = {  
          IdentityId,  
          Logins,  
      };  

      const command = new GetCredentialsForIdentityCommand(commandInput);  
      const credentials: GetCredentialsForIdentityCommandOutput = await cognitoClient.send(command);  
      console.log("Retrieved Credentials for Identity:", credentials);  

      // 使用獲取的證明來生成 AppStream 的串流 URL  
      const appStreamClient = new AppStreamClient({ region: "ap-northeast-2" }); // 初始化 AppStream 客戶端  
      const streamingInput = {  
          StackName,  
          FleetName,  
          UserId,  
          ApplicationId,  
          Validity,  
          SessionContext,  
      };  

      const streamingCommand = new CreateStreamingURLCommand(streamingInput);  
      const streamingResponse = await appStreamClient.send(streamingCommand);  
      console.log("Generated Streaming URL:", streamingResponse);  

      // 返回 Cognito 證明和 AppStream 串流 URL  
      res.status(200).json({ credentials, streamingURL: streamingResponse.StreamingURL, expires: streamingResponse.Expires });  
  } catch (error) {  
      console.error("Detailed error while retrieving credentials:", error);  
      res.status(500).json({ error: "Error retrieving credentials" });  
  }  
}
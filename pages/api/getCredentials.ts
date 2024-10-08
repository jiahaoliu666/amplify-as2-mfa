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
import { NextApiRequest, NextApiResponse } from "next";  

export default async function handler(  
  req: NextApiRequest,  
  res: NextApiResponse  
) {  
  if (req.method !== "POST") {  
      res.setHeader("Allow", ["POST"]);  
      return res.status(405).end(`Method ${req.method} Not Allowed`);  
  }  

  const { IdentityId, Logins } = req.body as {  
      IdentityId: string;  
      Logins: { [key: string]: string };  
  };  

  const client = new CognitoIdentityClient({ region: "ap-northeast-2" });  

  try {  
      const commandInput: GetCredentialsForIdentityCommandInput = {  
          IdentityId,  
          Logins,  
      };  

      const command = new GetCredentialsForIdentityCommand(commandInput);  

      const credentials: GetCredentialsForIdentityCommandOutput = await client.send(command);  
      // console.log("Retrieved Credentials for Identity:", credentials);  
      res.status(200).json(credentials);  
  } catch (error) {  
      // console.error("Detailed error while retrieving credentials:", error);  
      res.status(500).json({ error: "Error retrieving credentials" });  
  }  
}
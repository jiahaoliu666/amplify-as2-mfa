// import {  
//   CognitoIdentityClient,  
//   GetIdCommand,  
//   GetIdCommandInput,  
//   GetIdCommandOutput,  
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

//   const { IdentityPoolId, LoginProvider, IdToken } = req.body as {  
//       IdentityPoolId: string;  
//       LoginProvider: string;  
//       IdToken: string;  
//   };  

//   const client = new CognitoIdentityClient({ region: "ap-northeast-2" });  

//   try {  
//       const commandInput: GetIdCommandInput = {  
//           IdentityPoolId,  
//           Logins: {  
//               [LoginProvider]: IdToken,  
//           },  
//       };  

//       const command = new GetIdCommand(commandInput);  

//       const data: GetIdCommandOutput = await client.send(command);  
//       console.log("Retrieved Identity ID data:", data);  
//       res.status(200).json(data);  
//   } catch (error) {  
//       console.error("Detailed error while retrieving identity ID:", error);  
//       res.status(500).json({ error: "Error retrieving identity ID" });  
//   }  
// }

import {  
  CognitoIdentityClient,  
  GetIdCommand,  
  GetIdCommandInput,  
  GetIdCommandOutput,  
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

  const { IdentityPoolId, LoginProvider, IdToken } = req.body as {  
      IdentityPoolId: string;  
      LoginProvider: string;  
      IdToken: string;  
  };  

  const client = new CognitoIdentityClient({ region: "ap-northeast-2" });  

  try {  
      const commandInput: GetIdCommandInput = {  
          IdentityPoolId,  
          Logins: {  
              [LoginProvider]: IdToken,  
          },  
      };  

      const command = new GetIdCommand(commandInput);  

      const data: GetIdCommandOutput = await client.send(command);  
      // console.log("Retrieved Identity ID data:", data);  
      res.status(200).json(data);  
  } catch (error) {  
      // console.error("Detailed error while retrieving identity ID:", error);  
      res.status(500).json({ error: "Error retrieving identity ID" });  
  }  
}
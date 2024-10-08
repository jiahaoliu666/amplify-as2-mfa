import "@/styles/app.css";  
import type { AppProps } from "next/app";  
import { Amplify } from "aws-amplify";  
import outputs from "@/amplify_outputs.json";  
import "@aws-amplify/ui-react/styles.css";  
import Head from 'next/head';  // 導入 Head  

Amplify.configure(outputs);  

export default function App({ Component, pageProps }: AppProps) {  
  return (  
    <>  
      <Head>  
        <title>AppStream 登入系統</title>  {/* 設置標題 */}  
      </Head>  
      <Component {...pageProps} />  
    </>  
  );  
}
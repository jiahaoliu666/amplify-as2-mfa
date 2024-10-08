import { useEffect } from 'react';  
import { useRouter } from 'next/router';  

export default function Home() {  
  const router = useRouter();  

  useEffect(() => {  
    // 自動跳轉到 login 頁面  
    router.push('/login');  
  }, [router]);  

  return null; // 或者可以返回一個加載中的提示  
}
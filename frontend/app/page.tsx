"use client";
import React from 'react'
import GetStarted from './onboarding/page'
import SplashScreen from "@/components/onboarding/SplashScreen";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function App(){
  const pathName = usePathname()
  const isHome = pathName === "/"
  const [isLoading, setIsLoading] = useState(isHome);
  
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => setIsLoading(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <div className='flex md:hidden'>
      {isLoading && isHome ? (
           <SplashScreen />
        ): (
          <>
            <GetStarted />
          </>
        )}
    </div>
  )
  
}


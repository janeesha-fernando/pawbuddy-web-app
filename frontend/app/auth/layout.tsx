import React from 'react'
import OnboardingImage from '@/public/onboarding.png'
import Image from 'next/image'
import ActionCard from '@/components/ActionCard'
import { RxPerson } from "react-icons/rx";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='relative md:hidden w-full h-screen bg-gradient-to-t from-gray-100/0 to-gray-100 overflow-hidden'>
        {/* Background Image  */}
        <div className='mt-10 absolute inset-0 z-0'>
            <Image src={OnboardingImage} alt='onboarding' layout='fill' className='object-cover' />
        </div> 
        {/* Content Container */}
        <div className='h-full relative z-10 flex flex-col justify-end'>
            <ActionCard icon={RxPerson}> 
                {children}
            </ActionCard>
        </div>
    </div>
  );
}

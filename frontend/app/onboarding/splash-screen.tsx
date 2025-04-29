import React from 'react'
import Logo from '@/public/logo.png'
import Onboarding from '@/public/onboarding.png'
import Image from 'next/image'

export default function SplashScreen() {
  return (
    <div className='h-screen bg-gradient-to-t from-gray-100/0 to-gray-100 overflow-hidden'>
        {/* Logo */}
        <div className='py-24 flex items-center justify-center'>
            <Image src={Logo} alt='logo' className='w-40 h-40 object-contain' />
        </div>
        <Image src={Onboarding} alt='onboarding-background' className='h-3/4 object-cover' />
    </div>
  )
}

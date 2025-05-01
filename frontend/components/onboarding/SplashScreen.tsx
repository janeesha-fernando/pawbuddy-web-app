import React from 'react'
import Logo from '@/public/logo.png'
import Onboarding from '@/public/onboarding.png'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function SplashScreen() {
  return (
    <div className='h-screen bg-gradient-to-t from-gray-100/0 to-gray-100 overflow-hidden'>
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }} 
          className='py-24 flex items-center justify-center'>
            <Image src={Logo} alt='logo' className='w-40 h-40 object-contain' />
        </motion.div>
        <Image src={Onboarding} alt='onboarding-background' className='h-3/4 object-cover' />
    </div>
  )
}

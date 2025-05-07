import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function Onboarding() {
  return (
    <div className='w-full flex flex-col items-center bg-white rounded-t-3xl'>
        <div className='mt-16 flex flex-col items-center gap-6'>
            {/* Progress */}
            <div className='flex items-center justify-center gap-2'>
                <div className='w-14 bg-gray-200 h-1 rounded-4xl' />
                <div className='w-14 bg-yellow-500 h-1.5 rounded-4xl' />
                <div className='w-14 bg-gray-200 h-1 rounded-4xl' />
            </div>
            {/* Content */}
            <div className='px-7 flex flex-col items-center justify-center gap-3'>
                <h1 className='text-2xl text-gray-800 font-catamaran font-bold'>Personalized Pet Profiles</h1>
                <p className='text-base text-gray-600 text-center font-noto-sans font-medium leading-7'>Schedule vet appointments, track and plan meals, and manage daily activities tailored to your PawBuddy&apos;s unique needs. </p>
            </div>
        </div>
        {/* Get Started Button */}
        <Link href={'/auth/login'} className='w-full flex items-center justify-center px-6 py-10'>
            <Button className='w-full p-5 bg-blue-500 rounded-md text-base font-noto-sans'>Get Started</Button>
        </Link>
    </div>
  )
}

import LoginForm from '@/components/forms/LoginForm'
import Link from 'next/link'
import React from 'react'

export default function Login() {
  return (
    <div className='w-full flex flex-col justify-center bg-white p-6 rounded-t-3xl'>
      {/* Header */}
      <div className='flex flex-col items-center justify-center gap-2.5 mt-10'>
        <h1 className='text-2xl text-gray-800 font-catamaran font-bold'>Login</h1>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-base text-gray-600 font-noto-sans font-medium'>Welcome back to PawBuddy.</p>
          <p className='text-base text-gray-600 font-noto-sans font-medium'>You&apos;ve been missed!</p>
        </div>
      
      </div>
      {/* Form */}
      <LoginForm />
      {/* Footer */}
      <p className='text-gray-500 text-sm text-center font-noto-sans font-medium'>
        Don&apos;t have an account ? &nbsp;
        <Link href={'/auth/create-account'} className='text-blue-500'>Register Now</Link>
      </p>
    </div>
  )
}

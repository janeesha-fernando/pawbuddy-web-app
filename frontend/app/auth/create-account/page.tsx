import CreateAccountForm from '@/components/forms/CreateAccountForm'
import Link from 'next/link'
import React from 'react'

export default function CreateAccount() {
  return (
    <div className='w-full flex flex-col justify-center bg-white p-6 rounded-t-3xl'>
      {/* Header */}
      <div className='flex flex-col items-center justify-center gap-2.5 mt-10'>
        <h1 className='text-2xl text-gray-800 font-catamaran font-bold'>Create Account</h1>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-base text-gray-600 font-noto-sans font-medium'>Welcome to PawBuddy.</p>
          <p className='text-base text-center text-gray-600 font-noto-sans font-medium'>Enter your information to get started.</p>
        </div>
      
      </div>
      {/* Form */}
      <CreateAccountForm />
      {/* Footer */}
      <p className='text-gray-500 text-sm text-center font-noto-sans font-medium'>
        Already have an account ? &nbsp;
        <Link href={'/auth/login'} className='text-blue-500'>Login here</Link>
      </p>
    </div>
  )
}

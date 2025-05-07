import EmailVerificationForm from '@/components/forms/EmailVerficationForm'
import Link from 'next/link'
import React from 'react'

export default function EmailVerification() {
  return (
    <div className='w-full flex flex-col justify-center space-y-4 bg-white p-6 rounded-t-3xl'>
      {/* Header */}
      <div className='flex flex-col items-center justify-center gap-2.5 mt-10'>
        <h1 className='text-2xl text-gray-800 font-catamaran font-bold'>Forgot Your Password</h1>
        <p className='px-5 text-base text-center text-gray-600 font-noto-sans font-medium'>Enter your email address and we will send you  instructions to reset your password.</p>
      </div>
      {/* Form */}
      <EmailVerificationForm />
      {/* Footer */}
      <Link href={'/auth/login'} className='text-sm text-center text-blue-500'>Back to Login</Link>
    </div>
  )
}

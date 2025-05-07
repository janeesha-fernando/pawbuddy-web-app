import { OTPForm } from '@/components/forms/OTPForm'
import Link from 'next/link'
import React from 'react'

export default function EmailValidation() {
  return (
    <div className='w-full flex flex-col justify-center bg-white p-6 rounded-t-3xl'>
      {/* Header */}
      <div className='flex flex-col items-center justify-center gap-2.5 mt-10'>
        <h1 className='text-2xl text-gray-800 font-catamaran font-bold'>Validation Code</h1>
        <div className='px-3 flex flex-col items-center justify-center'>
          <p className='text-base text-center text-gray-600 font-noto-sans font-medium'>Check your email inbox and enter the validation code here.</p>
        </div>
      </div>
      {/* Form */}
      < OTPForm />
      {/* Footer */}
      <p className='text-gray-500 text-sm text-center font-noto-sans font-medium'>
        Did not receive the code? &nbsp;
        <Link href={'/auth/email-validation'} className='text-blue-500'>Resend</Link>
      </p>
    </div>
  )
}

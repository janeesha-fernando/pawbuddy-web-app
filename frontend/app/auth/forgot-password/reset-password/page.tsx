import ResetPasswordForm from '@/components/forms/ResetPasswordForm'
import React from 'react'

export default function ResetPassword() {
  return (
    <div className='w-full flex flex-col justify-center bg-white p-6 rounded-t-3xl'>
      {/* Header */}
      <div className='flex flex-col items-center justify-center gap-2.5 mt-10'>
        <h1 className='text-2xl text-gray-800 font-catamaran font-bold'>Set New Password</h1>
        <p className='px-4 text-base text-center text-gray-600 font-noto-sans font-medium'>Your new password must be different to previous passwords.</p>
      </div>
      {/* Form */}
      <ResetPasswordForm />
    </div>
  )
}

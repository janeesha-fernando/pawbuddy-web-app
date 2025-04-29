import { Button } from '@/components/ui/button'
import React from 'react'

export default function page(){
  return (
    <div className='my-20 flex flex-col items-center justify-center gap-5'>
      <h1 className='text-3xl'>Welcome to PawBuddy</h1>
      <Button className='p-5 bg-purple-200 text-purple-950 text-xl'>Get Started</Button>
    </div>
  )
}


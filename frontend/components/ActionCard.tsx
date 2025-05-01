import React from 'react'
import { IconType } from 'react-icons';

interface ActionCardProps{
  children: React.ReactNode;
  icon: IconType;
}

export default function ActionCard({ children, icon:Icon }:ActionCardProps) {
  return (
    <div className='relative flex flex-col items-center pt-10'>
      {/* Content */}
      {children}
      {/* Bullet Container */}
      <div className='absolute top-0 w-20 h-20 flex flex-col items-center justify-center bg-white rounded-full'>
        <div className='w-16 h-16 flex flex-col items-center justify-center border-2 border-blue-100 rounded-full'>
          <Icon className='w-9 h-9 text-blue-500' />
        </div>
      </div>
    </div>
  )
}

import { LoginGoogleButton } from '@/components/login-button';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata= {
    title: 'Sign In',
    description: 'Sign In to your account',
  };
  
const SiginPage = () => {
  return (
    <div className='flex items-center h-screen'>
        <div className='bg-white w-96 mx-auto rounded-sm shadow p-8'>
            <h1 className='text-2xl font-bold mb-1'>Sign In</h1>
            <p className='font-medium mb-5 text-gray-500'>Sign In to ypur account</p>
            <div className='py-4 text-center'>
                <LoginGoogleButton />
            </div>
        </div>
  </div>
  )
}

export default SiginPage
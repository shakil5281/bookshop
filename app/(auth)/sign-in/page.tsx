"use client"

import React from 'react'
import { Input } from '@/components/ui/input'
import MainLogo from '@/assets/img/books.png'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Key from '@/assets/img/key.png'
import { useRouter } from 'next/navigation'



export default function Login() {

  const router = useRouter()

  return (
    <div className='lg:bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-200 h-full lg:py-20'>
      <div className='bg-white lg:max-w-md m-auto flex-col lg:justify-center h-full lg:p-10 p-6 lg:shadow-md'>
        <div className='py-1 flex space-x-1'>
          <Image
            width={30}
            height={30}
            src={MainLogo}
            alt='Main Logo'
          />
          <h1 className='text-xl font-semibold tracking-tight text-sky-600'>BookShop</h1>
        </div>
        <div className='pt-4'>
          <h1 className='text-2xl font-semibold text-gray-700'>Sign In</h1>
        </div>
        <div className=''>
          <form action="">
            <div className='py-2'>
              <input className='border-b w-full py-2 px-1 border-gray-500 text-md focus-visible:outline-none' placeholder='Email Address' />
            </div>
            <div className='flex flex-col py-3'>
              <div>No account? <span onClick={()=>router.push('/sign-up')} className='text-sky-500 py-2 text-sm hover:underline cursor-pointer'>Create one!</span></div>
              <div className='text-sky-500 py-3 text-sm hover:underline cursor-pointer'>Can’t access your account?</div>
            </div>
            <div className='flex justify-end space-x-2'>
              <Button onClick={()=>router.push('/')} className='rounded-none text-lg px-10' variant='secondary'>Back</Button>
              <Button onClick={()=>router.push('/')} variant='default' className='rounded-none text-lg px-10 bg-sky-600 hover:bg-sky-500'>Next</Button>
            </div>
          </form>
          <div className='border p-4 lg:p-2 flex justify-center my-20 space-x-4 border-gray-200 hover:bg-gray-200 cursor-pointer'>
            <div>
              <Image
                width={30}
                height={30}
                src={Key}
                alt='Key Logo'
                className='lg:w-6'
              />
            </div>
            <div className='text-lg font-semibold lg:text-sm'>Sign-in option</div>
          </div>
        </div>
      </div>
    </div>
  )
}

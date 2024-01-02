"use client"

import React from 'react'
import { Input } from '@/components/ui/input'
import MainLogo from '@/assets/img/books.png'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Key from '@/assets/img/key.png'
import { useRouter } from 'next/navigation'

export default function Signup() {

    const router = useRouter()

  return (
    <div className='lg:bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-200 h-full lg:flex justify-center'>
      <div className='bg-white lg:max-w-md lg:min-w-[28rem] m-auto lg:p-10 p-6 lg:shadow-md block'>
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
          <h1 className='text-2xl font-semibold text-gray-700'>Create account</h1>
        </div>
        <div className=''>
          <form action="">
            <div className='py-2'>
              <input className='border-b w-full py-2 px-1 border-gray-500 text-md focus-visible:outline-none' placeholder='xyz@example.com' />
            </div>
            <div className='flex flex-col py-3'>
              <div className='font-light'>Have a already account ? <span onClick={()=>router.push('/sign-in')} className='text-sky-500 py-2 text-sm hover:underline cursor-pointer'>Login in</span></div>
            </div>
            <div className='flex justify-end space-x-2'>
              <Button variant='default' className='rounded-none text-lg px-10 bg-sky-600 hover:bg-sky-500'>Next</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

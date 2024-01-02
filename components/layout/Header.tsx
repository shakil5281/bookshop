"use client"

import Image from 'next/image'
import React from 'react'
import MainLogo from '@/assets/img/books.png'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

export default function Header() {

    const router = useRouter()
    return (
        <div className='shadow-sm'>
            <div className='py-4 flex justify-between items-center 2xl:max-w-screen-2xl xl:max-w-6xl lg:max-w-5xl md:max-w-3xl m-auto max-w-sm'>
                <div>
                    <div onClick={()=>router.push('/')} className='py-1 flex space-x-1 cursor-pointer'>
                        <Image
                            width={25}
                            height={20}
                            src={MainLogo}
                            alt='Main Logo'
                        />
                        <h1 className='text-xl font-semibold tracking-tight text-sky-600'>BookShop</h1>
                    </div>
                </div>
                <div>
                    <Button onClick={()=>router.push('/sign-in')} className='font-semibold' variant='secondary'>Login</Button>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import { Card, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import google from '@/assets/img/google.png'

export default function CategoryCard() {
    return (
        <Card className='m-3 w-40 h-56 border-transparent overflow-hidden border-none hover:-translate-y-1 hover:shadow-md shadow duration-200 cursor-pointer'>
            <div className='h-28 p-4 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 flex justify-center items-center'> 
            <Image
            width={50}
            height={50}
            src={google}
            alt='google'
            />
            </div>
            <div className='bg-gray-100 h-full p-2 hover:bg-white duration-150'> 
                <div>
                    <h1 className='font-semibold'>Google</h1>
                </div>
                <div className='flex items-end  h-16'>
                    <div>
                        4.00
                    </div>
                </div>
            </div>
        </Card>
    )
}

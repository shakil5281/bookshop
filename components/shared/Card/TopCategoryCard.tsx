import Image from 'next/image'
import React from 'react'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import BookCard from '@/assets/img/stack-of-books.png'

export default function TopCategoryCard() {
    return (
        <Card className='hover:scale-110 lg:w-[16rem] w-[24rem] rounded-sm m-2 border-gray-100 cursor-pointer hover:shadow-md duration-300'>
            <CardHeader>
                <div className='flex flex-row space-x-6'>
                    <div>
                        <Image
                            width={80}
                            height={80}
                            src={BookCard}
                            alt='Book Card' />
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <CardTitle className='text-md'>New book</CardTitle>
                    </div>
                </div>
            </CardHeader>
        </Card>
    )
}

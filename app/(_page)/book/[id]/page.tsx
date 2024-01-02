import WidthContainer from '@/components/WidthContainer'
import MainCard from '@/components/shared/Card/MainCard'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function page() {
    return (
        <WidthContainer>
            <div>
                <div className="shadow-xl opacity-10 top-18 left-0 absolute bg-[url('https://plus.unsplash.com/premium_photo-1702910931829-729785a49410?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] 
                bg-cover w-full h-4/5 overflow-hidden ">

                </div>
                <div className="flex flex-row h-[85vh] items-end px-20 py-32 backdrop-blur-xl bg-transparent">
                    <div>
                        <MainCard />
                    </div>
                    <div className='px-6 py-6 space-y-8'>
                        <h1 className='text-4xl font-semibold w-4/5'>
                            Hidden City: Hidden Object Adventure
                        </h1>
                        <p>
                            consectetur obcaecati iste magnam inciduna, id ea ioreatem. Rminus
                            sequi minima. Dicta, fugiat!
                        </p>
                        <Button className='bg-sky-600 rounded px-20 py-6' variant='default'>Add to Card</Button>
                    </div>
                </div>
            </div>
        </WidthContainer>
    )
}

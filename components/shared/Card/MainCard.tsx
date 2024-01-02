import React from 'react'
import { Card } from '@/components/ui/card'


export default function MainCard() {
  return (
    <Card className='m-2 lg:w-52 w-44 h-72 border-transparent overflow-hidden border-none hover:shadow-md shadow duration-300 cursor-pointer hover:scale-110'>
      <div className="bg-[url('https://images.unsplash.com/photo-1513001900722-370f803f498d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover w-full h-full overflow-hidden">
        <div className='z-10 flex items-end h-full'>
          <div className='w-full block backdrop-blur-sm p-4'>
            <h1 className='text-white font-semibold text-lg block w-full'>Landing page</h1>
            <div className='py-2 flex justify-between w-full'>
              <p className='text-white'>New</p>
              <p className='text-white'>100$</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

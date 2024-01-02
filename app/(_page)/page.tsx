import React from 'react'
import WidthContainer from '@/components/WidthContainer'
import TopCategoryCard from '@/components/shared/Card/TopCategoryCard'
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CategoryCard from '@/components/shared/Card/CategoryCard';
import MainCard from '@/components/shared/Card/MainCard';
import Image from 'next/image';
import HeroSlider from '@/assets/img/hero_slider.jpg'
import BookSlider from '@/assets/img/books_slider.jpg'



export default function Homepage() {
  return (
    <WidthContainer>
      <div>

        {/* Slider Image */}
        <div>
          <div className='flex space-x-4 py-8 relative'>
            <div>
              <Image
                className='h-full rounded-lg shadow-2xl bg-transparent backdrop:blur-md bg-blue-300'
                width={800}
                height={600}
                src={HeroSlider}
                alt='Image Slider'
              />
            </div>
            <div>
              <Image
                className='h-full rounded-lg shadow-2xl bg-transparent backdrop:blur-md bg-blue-300'
                width={400}
                height={600}
                src={BookSlider}
                alt='Book Slider'
              />
            </div>
          </div>
        </div>

        <div>
          <div className='inline-block hover:bg-gray-100 rounded-md my-2 duration-200 hover:px-4 cursor-pointer py-1'>
            <div className='flex space-x-2'>
              <h1 className='font-semibold text-xl text-gray-700'>Top Category</h1>
              <div className='mt-1.5'>
                <ChevronRight />
              </div>
            </div>
          </div>
          <div className='flex flex-row flex-wrap justify-center'>
            <TopCategoryCard />
            <TopCategoryCard />
            <TopCategoryCard />
            <TopCategoryCard />
          </div>
        </div>


        <div className=' hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 h-72 my-8 rounded-lg p-10 lg:flex justify-between items-center'>
          <div className='space-y-4 backdrop-blur'>
            <h1 className='text-2xl font-semibold text-gray-100'>Essensial Book List</h1>
            <Button variant='secondary'>See All</Button>
          </div>
          <div className='flex flex-row'>
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
          </div>
        </div>


        <div>
          <div className='inline-block hover:bg-gray-100 rounded-md my-2 duration-200 hover:px-4 cursor-pointer py-1'>
            <div className='flex space-x-2'>
              <h1 className='font-semibold text-xl text-gray-700'>Top Saling books</h1>
              <div className='mt-1.5'>
                <ChevronRight />
              </div>
            </div>
          </div>
          <div className='flex flex-row flex-wrap justify-center'>
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
          </div>
        </div>


        <div>
          <div className='inline-block hover:bg-gray-100 rounded-md my-2 duration-200 hover:px-4 cursor-pointer py-1'>
            <div className='flex space-x-2'>
              <h1 className='font-semibold text-xl text-gray-700'>New release book</h1>
              <div className='mt-1.5'>
                <ChevronRight />
              </div>
            </div>
          </div>
          <div className='flex flex-row flex-wrap justify-center'>
            <MainCard />
            <MainCard />
            <MainCard />
            <MainCard />
            <MainCard />
          </div>
        </div>


        <div className=' hidden bg-gradient-to-r from-pink-900 via-orange-900 to-red-900 h-72 my-8 rounded-lg p-10 lg:flex justify-between items-center'>
          <div className='space-y-4 backdrop-blur'>
            <h1 className='text-2xl font-semibold text-gray-100'>Essensial Book List</h1>
            <Button variant='secondary'>See All</Button>
          </div>
          <div className='flex flex-row'>
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
          </div>
        </div>


      </div>
    </WidthContainer>
  )
}

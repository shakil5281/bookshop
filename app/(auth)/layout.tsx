import React from 'react'

export default function Authlayout({ children, }: {
    children: React.ReactNode
}) {
    return <section className='flex flex-col h-full w-full lg:justify-center'>{children}</section>
}
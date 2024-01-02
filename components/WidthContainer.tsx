import React from 'react'

export default function WidthContainer({ children, }: {
    children: React.ReactNode
}) {
    return <section
        className='2xl:max-w-screen-2xl xl:max-w-6xl lg:max-w-5xl md:max-w-3xl m-auto max-w-sm'
    >{children}</section>
}
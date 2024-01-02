import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import React from 'react'

export default function DashboardLayout({ children, }: {
    children: React.ReactNode
}) {
    return <section><Header />{children}<Footer/></section>
}
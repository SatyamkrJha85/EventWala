import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EventWala - All-in-One Event Management Platform',
  description: 'Plan and book everything for your special occasions like marriage, upnayan, haldi, sagun, diwali, ganesh puja, and more. Find venues, vendors, and create custom packages.',
  keywords: 'event management, wedding planning, venue booking, vendor services, Indian events, marriage, diwali, puja',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

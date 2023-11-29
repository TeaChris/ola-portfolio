import Navbar from '@/components/Navbar'
import './globals.css'
import localFont from 'next/font/local'
import Footer from '@/components/Footer'

const myFont = localFont({ src: '../assets/fira-mono.medium.ttf' })

export const metadata = {
  title:
    'Bermuda: Creating engaging websites with stunning designs and seamless functionality for optimal user experiences',
  description: 'Frontend Developer & UX Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${myFont.className} w-screen min-h-screen bg-body relative lg:overflow-hidden`}
      >
        <Navbar />
        
        {children}
        <Footer />
      </body>
    </html>
  )
}

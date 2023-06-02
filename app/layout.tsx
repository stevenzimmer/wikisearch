import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'WikiRocket Web Project',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-slate-800 ${inter.className}`}>
        <Navbar />
        {children}</body>
    </html>
  )
}

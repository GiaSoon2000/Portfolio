import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chang Gia Soon - Software Engineer Portfolio',
  description: 'Software Engineering student and aspiring developer. Check out my projects and experience.',
  keywords: ['software engineer', 'developer', 'portfolio', 'web development', 'malaysia'],
  authors: [{ name: 'Chang Gia Soon' }],
  openGraph: {
    title: 'Chang Gia Soon - Software Engineer Portfolio',
    description: 'Software Engineering student and aspiring developer.',
    type: 'website',
  },
  icons: {
    icon: '/peace_icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

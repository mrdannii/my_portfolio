import React from 'react'
import { Inter } from 'next/font/google'
import ResumeContent from '@/components/ResumeContent'

const inter = Inter({ subsets: ['latin'] })

export default function resume() {
  return (
    <>
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-10 ${inter.className}`}
    >
      <ResumeContent/>
  

      
    
    </main>
    </>
  )
}

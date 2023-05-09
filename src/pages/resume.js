import React from 'react'
import { Inter } from 'next/font/google'
import ResumeContent from '@/components/ResumeContent'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function resume() {
  return (
    <>
    <Head>
        <title>Muhammad Daniyal - Resume</title>
        <link rel="shortcut icon" href="/react.svg" />
      </Head>
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-10 ${inter.className}`}
    >
      <ResumeContent/>
  

      
    
    </main>
    </>
  )
}

import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Categories from '@/components/Categories'
import MainLayout from '@/components/Layout'
import React from 'react'
import { useRouter } from 'next/router'

import { NextPageContext } from 'next'
import { requireAuth } from '@/util/requireAuth'
import dynamic from 'next/dynamic'

const inter = Inter({ subsets: ['latin'] })

export default function Login(page: React.ReactElement,) {
  // const {data:session, status} = useSession();
  const router = useRouter();
  const LoginPage = dynamic(()=>import("@/components/Login"), {
    loading: () => <div>Loading...</div>,
  })
    
  return (
    
      <>
    <Head>
        <title>Blog - Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <LoginPage/>
      </MainLayout>
    </>
  )
}

export async function getServerSideProps(context: NextPageContext) {
  return requireAuth(context, ({session}:any) => {
    return {
      props: {
        session
      }
    }
  })
}


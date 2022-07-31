import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AppLayout from '../components/Layouts/AppLayout'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout<P={}> = AppProps<P> & {
  Component: NextPageWithLayout<P>
}


function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || (page => page)
  return (
  <AppLayout>
    {getLayout(<Component {...pageProps} />)}
  </AppLayout>)
}

export default MyApp

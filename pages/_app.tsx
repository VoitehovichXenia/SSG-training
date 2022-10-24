import { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/Layout'
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Head>
      <link type="Image/x-icon" href="/favicon.ico" rel="icon" />
    </Head>
    <main>
      <Component {...pageProps} />
    </main>
  </Layout>
)

export default MyApp

import '../styles/globals.css'
import Head from 'next/head'
import {getProviders} from 'next-auth/react'





function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Head>
        
      </Head>
      <div className='container'>
        <Component {...pageProps} />
      </div>
    </Provider>
  )
}   

export default MyApp

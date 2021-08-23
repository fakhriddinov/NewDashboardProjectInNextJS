import '../styles/globals.css'
import Head from "next/head"
import 'bootstrap/dist/css/bootstrap.css'


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <Head>
        <title>
          DASHBOARD NEXT-JS
        </title>
        
      </Head>
    </div>
  )
}

export default MyApp

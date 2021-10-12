import '../styles/globals.css'
import Head from "next/head"
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux'
import store from '../redux/store'


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Head>
        <title>
          DASHBOARD NEXT-JS
        </title>

      </Head>
    </Provider>
  )
}

export default MyApp

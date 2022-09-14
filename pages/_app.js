import '../styles/globals.css'
import AlertState from '../context/AlertState'
function MyApp({ Component, pageProps }) {

  return <><AlertState>
    <Component {...pageProps} />
    </AlertState></>
}

export default MyApp

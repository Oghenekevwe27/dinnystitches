import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "../ui/stitches.config"
import { globalStyles } from '../ui/stitches.config';
import "@fortawesome/fontawesome-free/css/all.css";


function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return <Component {...pageProps} />
}

export default MyApp

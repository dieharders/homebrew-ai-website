import { AppProps } from 'next/app'
import '@/global/global.css'

// Overrides the default "App"
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

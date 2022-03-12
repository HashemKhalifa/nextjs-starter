import { globalStyles } from '../shared/styles'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <>  {globalStyles}
    <Component {...pageProps} />
  </>
}

export default MyApp

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import {MoralisProvider as Moralis} from 'react-moralis';
import {CoinMarketProvider} from '../context/context';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Moralis serverUrl={process.env.NEXT_PUBLIC_SERVER} appId={process.env.NEXT_PUBLIC_APP_ID}>
      <CoinMarketProvider>
        <Component {...pageProps} />
      </CoinMarketProvider>
    </Moralis>
  )
}

export default MyApp

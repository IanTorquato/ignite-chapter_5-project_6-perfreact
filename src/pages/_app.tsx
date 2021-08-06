import { AppProps } from 'next/dist/next-server/lib/router/router';

import '@perfreact/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

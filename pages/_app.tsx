import type { AppProps } from 'next/app';
import '../styles/globals.css';
import '../styles/mui-datepicker.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/globalStyle';

export default function App({ Component, pageProps }: AppProps) {
  console.log('Component', Component);
  console.log('pageProps', pageProps);

  return <GlobalStyle {...pageProps}></GlobalStyle>;
}

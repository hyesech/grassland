import '../styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    console.log('Component', Component);
    console.log('pageProps', pageProps);

    return <Component {...pageProps} />;
}

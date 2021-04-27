import {AppProps} from 'next/app';
import {AppContextProvider} from '../contexts/AppContext';
import '../../styles/index.css';

export default ({Component, pageProps}: AppProps) => (
  <AppContextProvider>
    <Component {...pageProps} />
  </AppContextProvider>
);

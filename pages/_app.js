import '../styles/globals.css'
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import { Provider } from 'react-redux'
import store from '../app/store'
import { ChakraProvider } from '@chakra-ui/react'

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return <ChakraProvider>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </ChakraProvider>
}

export default MyApp

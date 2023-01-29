import Message from '@/src/controllers/Messages/Message'
import GlobalStyle from '@/src/GlobalStyles'
import store from '@/src/store/store'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {

  return (

    <Provider store={store}>

      <GlobalStyle />

      <Component {...pageProps} />

      <Message />

    </Provider>

  )

}

import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app'
import { StoreProvider } from 'contexts'
import { globalStyles } from 'styles/global'

function App({ 
  Component, 
  pageProps: { initialState, ...pageProps }
}: AppProps) {
  return (
    <StoreProvider initialState={initialState}>
      {globalStyles()}
      <Component {...pageProps} />
    </StoreProvider>
  )
}

export default appWithTranslation(App)
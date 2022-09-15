import 'styles/index.scss'

import type { AppProps } from 'next/app'
import Layout from 'layout/Layout'
import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default appWithTranslation(MyApp)

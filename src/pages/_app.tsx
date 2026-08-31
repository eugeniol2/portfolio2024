// pages/_app.js
import { CacheProvider, type EmotionCache } from '@emotion/react'
import { PrismicPreview } from '@prismicio/next'
import { ConfigProvider } from 'antd'
import ptBR from 'antd/lib/locale/pt_BR'
import { Provider } from 'jotai'
import { type AppProps } from 'next/app'
import Head from 'next/head'
import React, { useState } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'sonner'

import Header from 'src/app/components/header'
import Layout from 'src/app/components/layout'
import createEmotionCache from 'src/app/createEmotionCache'
import { ThemeComponent } from 'src/app/theme'
import { repositoryName } from 'src/prismicio'

const clientSideEmotionCache = createEmotionCache()

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps
}: MyAppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <Provider>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <CacheProvider value={emotionCache}>
            <ThemeComponent>
              <Head>
                <title>Eugênio Araújo | Desenvolvedor Full-Stack</title>
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1"
                />
              </Head>
              <Toaster
                richColors
                closeButton
                duration={3000}
                position="bottom-center"
              />
              <ConfigProvider locale={ptBR}>
                <Header />
                <Layout>
                  <Component {...pageProps} />
                </Layout>
                <PrismicPreview repositoryName={repositoryName} />
              </ConfigProvider>
            </ThemeComponent>
          </CacheProvider>
        </Hydrate>
      </QueryClientProvider>
    </Provider>
  )
}

export default MyApp

import { CacheProvider, type EmotionCache } from '@emotion/react'
import { PrismicPreview } from '@prismicio/next'
import { Provider } from 'jotai'
import { type AppProps } from 'next/app'
import Head from 'next/head'
import React, { useState } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'sonner'

import { DEFAULT_SETTINGS } from 'src/app/atoms/defaultSettingsAtom'
import GridSpotlight from 'src/app/components/gridSpotlight'
import Header from 'src/app/components/header'
import Layout from 'src/app/components/layout'
import createEmotionCache from 'src/app/createEmotionCache'
import { ThemeComponent } from 'src/app/theme'
import { repositoryName } from 'src/prismicio'

const clientSideEmotionCache = createEmotionCache()

const VIEWPORT = 'width=device-width, initial-scale=1'
const TOAST_DURATION_MS = 3000

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
                <meta name="viewport" content={VIEWPORT} />
              </Head>
              <Toaster
                theme="dark"
                richColors
                closeButton
                duration={TOAST_DURATION_MS}
                position={DEFAULT_SETTINGS.toastPosition}
              />
              <GridSpotlight />
              <Header />
              <Layout>
                <Component {...pageProps} />
              </Layout>
              <PrismicPreview repositoryName={repositoryName} />
            </ThemeComponent>
          </CacheProvider>
        </Hydrate>
      </QueryClientProvider>
    </Provider>
  )
}

export default MyApp

// pages/_app.js
import { CacheProvider, type EmotionCache } from '@emotion/react'
import { ConfigProvider } from 'antd'
import ptBR from 'antd/lib/locale/pt_BR'
import { Provider } from 'jotai'
import { type AppProps } from 'next/app'
import React, { useState } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'sonner'

import createEmotionCache from 'src/app/createEmotionCache'
import { ThemeComponent } from 'src/app/theme'

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
              <Toaster
                richColors
                closeButton
                duration={3000}
                position="bottom-center"
              />
              <ConfigProvider locale={ptBR}>
                <Component {...pageProps} />
              </ConfigProvider>
            </ThemeComponent>
          </CacheProvider>
        </Hydrate>
      </QueryClientProvider>
    </Provider>
  )
}

export default MyApp

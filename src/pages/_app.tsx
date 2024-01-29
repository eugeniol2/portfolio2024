// pages/_app.js
import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { AppProps } from 'next/app'
import { Provider } from 'jotai'
import { ThemeComponent } from '@/app/theme'
import { ConfigProvider } from 'antd'
import ptBR from 'antd/lib/locale/pt_BR'
import { Toaster } from 'sonner'

export interface MyAppProps extends AppProps {}

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <Provider>
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
    </Provider>
  )
}

export default MyApp

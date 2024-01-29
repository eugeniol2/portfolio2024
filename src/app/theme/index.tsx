import { GlobalStyles } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider
} from '@mui/material/styles'
import { type ReactNode } from 'react'

// ** Theme

import { useSettings } from '@/app/hooks/useSettings'
import { GlobalStyling } from '../styles/globalStylings'
import themeOptions from './themeOptions'

export const ThemeComponent = ({ children }: { children: ReactNode }) => {
  const { initialSettings } = useSettings()

  let theme = createTheme(themeOptions(initialSettings))

  theme = responsiveFontSizes(theme)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
      <GlobalStyles styles={() => GlobalStyling(theme) as any} />
    </ThemeProvider>
  )
}

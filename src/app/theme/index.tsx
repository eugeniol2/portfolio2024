import { GlobalStyles } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { type ReactNode } from 'react'

import { useSettings } from '../hooks/useSettings'
import { globalStyles } from '../styles/globalStylings'
import themeOptions from './themeOptions'

export const ThemeComponent = ({ children }: { children: ReactNode }) => {
  const { settings } = useSettings()
  const theme = createTheme(themeOptions(settings))

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
      <GlobalStyles styles={globalStyles} />
    </ThemeProvider>
  )
}

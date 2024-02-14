import { hexToRGBA } from 'src/app/utils/hexToRGBA'

import { type Theme } from '@mui/material/styles'

const navTabs = () => {
  return {
    MuiTabs: {
      styleOverrides: {
        root: ({ theme }: { theme: Omit<Theme, 'components'> }) => ({
          backgroundColor: hexToRGBA(theme.palette.primary.main, 0.08)
        })
      }
    }
  }
}

export default navTabs

import { type Theme } from '@mui/material/styles'

const navTabs = () => {
  return {
    MuiTabs: {
      styleOverrides: {
        root: ({ theme }: { theme: Omit<Theme, 'components'> }) => ({
          backgroundColor: 'none'
        }),
        indicator: ({ theme }: { theme: Omit<Theme, 'components'> }) => ({
          backgroundColor: theme.palette.text.primary,
          height: 1
        })
      }
    },
    MuiTab: {
      styleOverrides: {
        root: ({ theme }: { theme: Omit<Theme, 'components'> }) => ({
          '&.Mui-selected': {
            color: theme.palette.text.primary
          }
        })
      }
    }
  }
}

export default navTabs

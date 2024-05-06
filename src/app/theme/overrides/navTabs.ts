import { type Theme } from '@mui/material/styles'

const navTabs = () => {
  return {
    MuiTabs: {
      styleOverrides: {
        root: ({ theme }: { theme: Omit<Theme, 'components'> }) => ({
          backgroundColor: 'none'
        }),
        indicator: ({ theme }: { theme: Omit<Theme, 'components'> }) => ({
          // Customize the underline
          backgroundColor: theme.palette.primary.main, // Change the color of the underline
          height: 1 // Change the height of the underline
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

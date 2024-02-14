import { hexToRGBA } from 'src/app/utils/hexToRGBA'

import { type Theme } from '@mui/material/styles'

const IconButton = {
  MuiIconButton: {
    variants: [
      {
        props: { color: 'primary' },
        style: ({ theme }: { theme: Theme }) => ({
          color: theme.palette.primary.main,
          '&:hover': {
            backgroundColor: hexToRGBA(theme.palette.primary.main, 0.08)
          }
        })
      },
      {
        props: { color: 'secondary' },
        style: ({ theme }: { theme: Theme }) => ({
          color: theme.palette.secondary.main,
          '&:hover': {
            backgroundColor: hexToRGBA(theme.palette.secondary.main, 0.08)
          }
        })
      }
    ],
    styleOverrides: {
      root: ({ theme }: { theme: Omit<Theme, 'components'> }) => ({
        '&:hover': {
          backgroundColor: `rgba(${theme.palette.customColors.main}, 0.08)`
        }
      })
    }
  }
}

export default IconButton

import { type Theme } from '@mui/material/styles'

import { hexToRGBA } from 'src/app/utils/hexToRGBA'

const HOVER_OPACITY = 0.08

const IconButton = {
  MuiIconButton: {
    variants: [
      {
        props: { color: 'primary' },
        style: ({ theme }: { theme: Theme }) => ({
          color: theme.palette.primary.main,
          '&:hover': {
            backgroundColor: hexToRGBA(
              theme.palette.primary.main,
              HOVER_OPACITY
            )
          }
        })
      },
      {
        props: { color: 'secondary' },
        style: ({ theme }: { theme: Theme }) => ({
          color: theme.palette.secondary.main,
          '&:hover': {
            backgroundColor: hexToRGBA(
              theme.palette.secondary.main,
              HOVER_OPACITY
            )
          }
        })
      }
    ],
    styleOverrides: {
      root: ({ theme }: { theme: Omit<Theme, 'components'> }) => ({
        '&:hover': {
          backgroundColor: hexToRGBA(
            theme.palette.customColors.main,
            HOVER_OPACITY
          )
        }
      })
    }
  }
}

export default IconButton

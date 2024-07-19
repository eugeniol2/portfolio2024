import { type Theme } from '@mui/material/styles'

import { hexToRGBA } from 'src/app/utils/hexToRGBA'

const Button = {
  MuiButton: {
    variants: [
      {
        props: { color: 'primary', variant: 'contained' },
        style: ({ theme }: { theme: Theme }) => ({
          color: theme.palette.primary.contrastText,
          backgroundColor: theme.palette.primary.main,
          '&:hover': {
            backgroundColor: hexToRGBA(theme.palette.primary.main, 0.8)
          }
        })
      },
      {
        props: { color: 'primary', variant: 'outlined' },
        style: ({ theme }: { theme: Theme }) => ({
          color: theme.palette.primary.main,
          '&:hover': {
            backgroundColor: hexToRGBA(theme.palette.primary.main, 0.1)
          }
        })
      }
    ]
  }
}

export default Button

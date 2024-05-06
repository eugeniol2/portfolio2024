import { type Theme } from '@mui/material/styles'

import { hexToRGBA } from 'src/app/utils/hexToRGBA'

const Button = {
  MuiButton: {
    variants: [
      {
        props: { color: 'primary', variant: 'contained' }, // Add variant: 'contained'
        style: ({ theme }: { theme: Theme }) => ({
          color: theme.palette.primary.light,
          backgroundColor: theme.palette.primary.main, // Change the background color
          '&:hover': {
            backgroundColor: hexToRGBA(theme.palette.primary.main, 0.08)
          }
        })
      },
      {
        props: { color: 'secondary', variant: 'outlined' }, // Add variant: 'contained'
        style: ({ theme }: { theme: Theme }) => ({
          color: theme.palette.primary.main,
          '&:hover': {
            backgroundColor: hexToRGBA(theme.palette.secondary.main, 0.08)
          }
        })
      }
    ]
  }
}

export default Button

import { type Theme } from '@mui/material/styles'

import { tokens } from '../tokens'

const GUTTER_SPACING = 4

const typography = {
  MuiTypography: {
    styleOverrides: {
      gutterBottom: ({ theme }: { theme: Omit<Theme, 'components'> }) => ({
        marginBottom: theme.spacing(GUTTER_SPACING)
      })
    },
    variants: [
      {
        props: { variant: 'overline' },
        style: () => ({
          color: tokens.accent,
          display: 'block'
        })
      },
      {
        props: { variant: 'caption' },
        style: ({ theme }: { theme: Omit<Theme, 'components'> }) => ({
          color: theme.palette.text.disabled,
          display: 'block'
        })
      },
      {
        props: { variant: 'button' },
        style: ({ theme }: { theme: Omit<Theme, 'components'> }) => ({
          color: theme.palette.text.primary
        })
      }
    ]
  }
}

export default typography

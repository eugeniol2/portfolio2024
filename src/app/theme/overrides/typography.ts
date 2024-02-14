// ** Type Import
import { type Theme } from '@mui/material/styles'

const typography = {
  MuiTypography: {
    styleOverrides: {
      gutterBottom: ({ theme }: { theme: Omit<Theme, 'components'> }) => ({
        marginBottom: theme.spacing(2)
      })
    },
    variants: [
      {
        props: { variant: 'h1' },
        style: ({ theme }: { theme: Omit<Theme, 'components'> }) => ({
          color: theme.palette.text.primary
        })
      },
      {
        props: { variant: 'h2' },
        style: ({ theme }: { theme: Omit<Theme, 'components'> }) => ({
          color: theme.palette.text.primary
        })
      },
      {
        props: { variant: 'h3' },
        style: ({ theme }: { theme: Omit<Theme, 'components'> }) => ({
          color: theme.palette.text.primary
        })
      },
      {
        props: { variant: 'h4' },
        style: ({ theme }: { theme: Omit<Theme, 'components'> }) => ({
          color: theme.palette.text.primary
        })
      },
      {
        props: { variant: 'h5' },
        style: ({ theme }: { theme: Omit<Theme, 'components'> }) => ({
          color: theme.palette.text.primary
        })
      },
      {
        props: { variant: 'h6' },
        style: ({ theme }: { theme: Omit<Theme, 'components'> }) => ({
          color: theme.palette.text.primary
        })
      },
      {
        props: { variant: 'subtitle1' },
        style: ({ theme }: { theme: Omit<Theme, 'components'> }) => ({
          color: theme.palette.text.primary
        })
      },
      {
        props: { variant: 'subtitle2' },
        style: ({ theme }: { theme: Omit<Theme, 'components'> }) => ({
          color: theme.palette.text.secondary
        })
      },
      {
        props: { variant: 'body1' },
        style: ({ theme }: { theme: Omit<Theme, 'components'> }) => ({
          color: theme.palette.text.primary
        })
      },
      {
        props: { variant: 'body2' },
        style: ({ theme }: { theme: Omit<Theme, 'components'> }) => ({
          color: theme.palette.text.secondary
        })
      },
      {
        props: { variant: 'button' },
        style: ({ theme }: { theme: Omit<Theme, 'components'> }) => ({
          textTransform: 'none',
          color: theme.palette.text.primary
        })
      },
      {
        props: { variant: 'caption' },
        style: ({ theme }: { theme: Omit<Theme, 'components'> }) => ({
          color: theme.palette.text.secondary
        })
      },
      {
        props: { variant: 'overline' },
        style: ({ theme }: { theme: Omit<Theme, 'components'> }) => ({
          color: theme.palette.text.secondary
        })
      }
    ]
  }
}

export default typography

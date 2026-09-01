import { type Theme } from '@mui/material/styles'

import { hexToRGBA } from 'src/app/utils/hexToRGBA'

import { accentGlow, tokens, transitions } from '../tokens'

const TINTED_HOVER_OPACITY = 0.06
const CONTAINED_GLOW_INTENSITY = 0.4
const OUTLINED_GLOW_INTENSITY = 0.28

const animatedProperties = [
  'color',
  'border-color',
  'background-color',
  'box-shadow'
]
  .map(property => `${property} ${transitions.fast}`)
  .join(', ')

const Button = {
  MuiButton: {
    defaultProps: {
      disableElevation: true
    },
    styleOverrides: {
      root: {
        borderRadius: 2,
        textTransform: 'uppercase' as const,
        padding: '0.625rem 1.25rem',
        transition: animatedProperties
      }
    },
    variants: [
      {
        props: { variant: 'contained' },
        style: () => ({
          color: tokens.background,
          backgroundColor: tokens.accent,
          border: `1px solid ${tokens.accent}`,
          '&:hover': {
            backgroundColor: tokens.accentBright,
            borderColor: tokens.accentBright,
            boxShadow: accentGlow(CONTAINED_GLOW_INTENSITY)
          },
          '&.Mui-disabled': {
            color: tokens.textFaint,
            backgroundColor: 'transparent',
            borderColor: tokens.border
          }
        })
      },
      {
        props: { variant: 'outlined' },
        style: () => ({
          color: tokens.text,
          borderColor: tokens.borderStrong,
          backgroundColor: 'transparent',
          '&:hover': {
            color: tokens.accent,
            borderColor: tokens.accent,
            backgroundColor: hexToRGBA(tokens.accent, TINTED_HOVER_OPACITY),
            boxShadow: accentGlow(OUTLINED_GLOW_INTENSITY)
          },
          '&.Mui-disabled': {
            color: tokens.textFaint,
            borderColor: tokens.border
          }
        })
      },
      {
        props: { variant: 'text' },
        style: ({ theme }: { theme: Theme }) => ({
          color: theme.palette.text.secondary,
          '&:hover': {
            color: tokens.accent,
            backgroundColor: hexToRGBA(tokens.accent, TINTED_HOVER_OPACITY)
          }
        })
      }
    ]
  }
}

export default Button

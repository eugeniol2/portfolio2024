import { type Theme } from '@mui/material/styles'

import { hexToRGBA } from 'src/app/utils/hexToRGBA'

import { fonts, tokens, transitions } from '../tokens'

const INDICATOR_GLOW_OPACITY = 0.7

const navTabs = () => ({
  MuiTabs: {
    styleOverrides: {
      root: {
        minHeight: 'auto'
      },
      indicator: {
        backgroundColor: tokens.accent,
        height: 1,
        boxShadow: `0 0 12px 0 ${hexToRGBA(
          tokens.accent,
          INDICATOR_GLOW_OPACITY
        )}`
      }
    }
  },
  MuiTab: {
    styleOverrides: {
      root: ({ theme }: { theme: Omit<Theme, 'components'> }) => ({
        fontFamily: fonts.mono,
        fontSize: '0.75rem',
        fontWeight: 500,
        letterSpacing: '0.16em',
        textTransform: 'uppercase' as const,
        minHeight: 'auto',
        minWidth: 'auto',
        padding: '0.75rem 1rem',
        color: theme.palette.text.secondary,
        transition: `color ${transitions.fast}`,
        '&:hover': {
          color: tokens.text
        },
        '&.Mui-selected': {
          color: tokens.accent
        }
      })
    }
  }
})

export default navTabs

import { hexToRGBA } from 'src/app/utils/hexToRGBA'

import { fonts, tokens, transitions } from '../tokens'

const NO_DARK_ELEVATION_OVERLAY = 'none'
const UNDERLINE_OPACITY = 0.5

const surfaces = {
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: NO_DARK_ELEVATION_OVERLAY,
        backgroundColor: tokens.surface,
        border: `1px solid ${tokens.border}`,
        borderRadius: 2
      }
    }
  },
  MuiChip: {
    styleOverrides: {
      root: {
        fontFamily: fonts.mono,
        fontSize: '0.6875rem',
        letterSpacing: '0.08em',
        borderRadius: 2,
        height: 26,
        color: tokens.textMuted,
        borderColor: tokens.border,
        backgroundColor: 'transparent',
        transition: `color ${transitions.fast}, border-color ${transitions.fast}`,
        '&:hover': {
          color: tokens.accent,
          borderColor: tokens.accentDim
        }
      },
      outlined: {
        borderColor: tokens.border
      }
    }
  },
  MuiLink: {
    defaultProps: {
      underline: 'none' as const
    },
    styleOverrides: {
      root: {
        color: tokens.accent,
        transition: `color ${transitions.fast}, text-decoration-color ${transitions.fast}`,
        textUnderlineOffset: '0.25em',
        '&:hover': {
          textDecoration: 'underline',
          textDecorationColor: hexToRGBA(tokens.accent, UNDERLINE_OPACITY)
        }
      }
    }
  },
  MuiDivider: {
    styleOverrides: {
      root: {
        borderColor: tokens.border
      }
    }
  }
}

export default surfaces

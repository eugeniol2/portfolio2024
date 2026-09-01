import { fonts } from '../tokens'

const BASE_FONT_SIZE = 14

const typography = {
  fontFamily: fonts.body,
  fontSize: BASE_FONT_SIZE,
  h1: {
    fontFamily: fonts.display,
    fontWeight: 700,
    fontSize: 'clamp(2.25rem, 1.55rem + 3.1vw, 3.75rem)',
    lineHeight: 1.06,
    letterSpacing: '-0.03em'
  },
  h2: {
    fontFamily: fonts.display,
    fontWeight: 700,
    fontSize: 'clamp(1.75rem, 1.4rem + 1.6vw, 2.5rem)',
    lineHeight: 1.14,
    letterSpacing: '-0.02em'
  },
  h3: {
    fontFamily: fonts.display,
    fontWeight: 600,
    fontSize: 'clamp(1.375rem, 1.2rem + 0.8vw, 1.75rem)',
    lineHeight: 1.24,
    letterSpacing: '-0.015em'
  },
  h4: {
    fontFamily: fonts.display,
    fontWeight: 600,
    fontSize: '1.375rem',
    lineHeight: 1.3,
    letterSpacing: '-0.01em'
  },
  h5: {
    fontWeight: 500,
    lineHeight: 1.5,
    fontSize: '1.125rem'
  },
  h6: {
    fontWeight: 400,
    lineHeight: 1.75,
    fontSize: '1.0625rem'
  },
  subtitle1: {
    fontSize: '1rem',
    lineHeight: 1.6,
    letterSpacing: '0.01em'
  },
  subtitle2: {
    fontFamily: fonts.mono,
    lineHeight: 1.5,
    fontSize: '0.8125rem',
    letterSpacing: '0.04em'
  },
  body1: {
    lineHeight: 1.75,
    fontSize: '1rem'
  },
  body2: {
    fontSize: '0.875rem',
    lineHeight: 1.7
  },
  button: {
    fontFamily: fonts.mono,
    fontWeight: 500,
    lineHeight: 1.2,
    fontSize: '0.75rem',
    letterSpacing: '0.12em'
  },
  caption: {
    fontFamily: fonts.mono,
    lineHeight: 1.5,
    fontSize: '0.6875rem',
    letterSpacing: '0.06em'
  },
  overline: {
    fontFamily: fonts.mono,
    fontWeight: 500,
    fontSize: '0.6875rem',
    lineHeight: 1.4,
    letterSpacing: '0.24em',
    textTransform: 'uppercase' as const
  }
}

export default typography

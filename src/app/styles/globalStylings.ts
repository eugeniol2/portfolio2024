import { hexToRGBA } from 'src/app/utils/hexToRGBA'

import { tokens } from '../theme/tokens'

const GRID_CELL_SIZE = '4rem'
const GRID_LINE_OPACITY = 0.026
const ACCENT_HALO_OPACITY = 0.1
const SELECTION_OPACITY = 0.3
const SCROLLBAR_SIZE = 10
const FOCUS_RING_WIDTH = 2

const gridLineColor = hexToRGBA(tokens.text, GRID_LINE_OPACITY)

const accentHalo = `radial-gradient(48rem 30rem at 50% -8rem, ${hexToRGBA(
  tokens.accent,
  ACCENT_HALO_OPACITY
)}, transparent 70%)`

const horizontalGridLines = `linear-gradient(${gridLineColor} 1px, transparent 1px)`
const verticalGridLines = `linear-gradient(90deg, ${gridLineColor} 1px, transparent 1px)`

export const globalStyles = {
  html: {
    scrollBehavior: 'smooth',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale'
  },
  body: {
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    backgroundColor: tokens.background,
    color: tokens.text,
    backgroundImage: [accentHalo, horizontalGridLines, verticalGridLines].join(
      ', '
    ),
    backgroundSize: `100% 100%, ${GRID_CELL_SIZE} ${GRID_CELL_SIZE}, ${GRID_CELL_SIZE} ${GRID_CELL_SIZE}`,
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat, repeat, repeat'
  },

  '::selection': {
    backgroundColor: hexToRGBA(tokens.accent, SELECTION_OPACITY),
    color: '#FFF'
  },

  ':focus-visible': {
    outline: `${FOCUS_RING_WIDTH}px solid ${tokens.accent}`,
    outlineOffset: '3px'
  },

  '*::-webkit-scrollbar': {
    width: SCROLLBAR_SIZE,
    height: SCROLLBAR_SIZE
  },
  '*::-webkit-scrollbar-track': {
    backgroundColor: tokens.background
  },
  '*::-webkit-scrollbar-thumb': {
    backgroundColor: tokens.border,
    border: `2px solid ${tokens.background}`,
    borderRadius: 8
  },
  '*::-webkit-scrollbar-thumb:hover': {
    backgroundColor: tokens.borderStrong
  },

  '@media (prefers-reduced-motion: reduce)': {
    '*, *::before, *::after': {
      animationDuration: '0.01ms !important',
      animationIterationCount: '1 !important',
      transitionDuration: '0.01ms !important',
      scrollBehavior: 'auto !important'
    }
  }
}

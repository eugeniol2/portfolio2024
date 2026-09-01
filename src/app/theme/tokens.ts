import { hexToRGBA } from 'src/app/utils/hexToRGBA'

export const tokens = {
  background: '#0B0F14',
  surface: '#10161E',
  surfaceRaised: '#151D27',

  border: '#1E2A38',
  borderStrong: '#2B3B4D',

  text: '#E6EDF3',
  textMuted: '#93A4B8',
  textFaint: '#5C6C7F',

  accent: '#22D3EE',
  accentBright: '#67E8F9',
  accentDim: '#0E7490',

  error: '#FF5C6C',
  warning: '#FFB454',
  success: '#3FD68A'
} as const

export const fonts = {
  display: "'Space Grotesk', 'Public Sans', system-ui, sans-serif",
  body: "'Public Sans', system-ui, -apple-system, 'Segoe UI', sans-serif",
  mono: "'JetBrains Mono', 'SFMono-Regular', Consolas, monospace"
} as const

export const layout = {
  contentMaxWidth: '68rem',
  proseMaxWidth: '62ch',
  leadMaxWidth: '52ch',
  portraitColumnWidth: '18rem'
} as const

export const transitions = {
  fast: '160ms ease',
  medium: '200ms ease',
  slow: '300ms ease'
} as const

const GLOW_SPREAD_MULTIPLIER = 2

export const accentGlow = (intensity = 0.35) =>
  [
    `0 0 0 1px ${hexToRGBA(tokens.accent, intensity)}`,
    `0 0 28px -12px ${hexToRGBA(
      tokens.accent,
      intensity * GLOW_SPREAD_MULTIPLIER
    )}`
  ].join(', ')

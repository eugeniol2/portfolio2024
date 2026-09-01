import { type ThemeOptions } from '@mui/material'

const elevationShadow = (
  offsetY: number,
  blurRadius: number,
  opacity: number
) => `0px ${offsetY}px ${blurRadius}px 0px rgba(0, 0, 0, ${opacity})`

const Shadows = (): ThemeOptions['shadows'] => [
  'none',
  elevationShadow(1, 2, 0.24),
  elevationShadow(2, 6, 0.28),
  elevationShadow(3, 8, 0.3),
  elevationShadow(3, 10, 0.32),
  elevationShadow(4, 12, 0.34),
  elevationShadow(4, 14, 0.36),
  elevationShadow(5, 16, 0.38),
  elevationShadow(5, 18, 0.4),
  elevationShadow(6, 20, 0.42),
  elevationShadow(6, 22, 0.44),
  elevationShadow(7, 24, 0.46),
  elevationShadow(7, 26, 0.48),
  elevationShadow(8, 28, 0.5),
  elevationShadow(8, 30, 0.52),
  elevationShadow(9, 32, 0.54),
  elevationShadow(9, 34, 0.56),
  elevationShadow(10, 36, 0.58),
  elevationShadow(10, 38, 0.6),
  elevationShadow(11, 40, 0.62),
  elevationShadow(11, 42, 0.64),
  elevationShadow(12, 44, 0.66),
  elevationShadow(12, 46, 0.68),
  elevationShadow(13, 48, 0.7),
  elevationShadow(14, 52, 0.72)
]

export default Shadows

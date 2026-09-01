import { type ThemeOptions } from '@mui/material'

import breakpoints from './breakpoints'
import Overrides from './overrides'
import palette from './palette'
import shadows from './shadows'
import spacing from './spacing'
import { type Settings } from './types'
import typography from './typography'

const BORDER_RADIUS = 2
const TOOLBAR_MIN_HEIGHT = 64

const themeOptions = ({ skin, themeColor }: Settings): ThemeOptions => {
  const basePalette = palette(skin)

  return {
    breakpoints: breakpoints(),
    components: Overrides(),
    palette: { ...basePalette, primary: basePalette[themeColor] },
    ...spacing,
    shape: {
      borderRadius: BORDER_RADIUS
    },
    mixins: {
      toolbar: {
        minHeight: TOOLBAR_MIN_HEIGHT
      }
    },
    shadows: shadows(),
    typography
  }
}

export default themeOptions

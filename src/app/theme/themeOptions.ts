// ** MUI Theme Provider
import { type Theme, type ThemeOptions } from '@mui/material'
import { deepmerge } from '@mui/utils'

import breakpoints from './breakpoints'
import palette from './palette'
// ** Theme Override Imports
import shadows from './shadows'
import spacing from './spacing'
import { type Settings } from './types'
import typography from './typography'
import { hexToRGBA } from '../utils/hexToRGBA'
import Overrides from './overrides'

const themeOptions = (settings: Settings): ThemeOptions => {
  const userThemeConfig: ThemeOptions = Object.assign({})
  const { skin, mode, themeColor } = settings

  const mergedThemeConfig: ThemeOptions = deepmerge(
    {
      breakpoints: breakpoints(),
      components: Overrides(settings),
      palette: palette(mode, skin),
      ...spacing,
      shape: {
        borderRadius: 6
      },
      mixins: {
        toolbar: {
          minHeight: 64
        }
      },
      shadows: shadows(mode),
      typography
    },
    userThemeConfig
  )

  return deepmerge(
    {
      palette: {
        primary: {
          ...(mergedThemeConfig.palette
            ? mergedThemeConfig.palette[themeColor]
            : palette(mode, skin).primary)
        }
      }
    },
    mergedThemeConfig
  )
}

export default themeOptions

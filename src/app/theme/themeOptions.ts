// ** MUI Theme Provider
import { type ThemeOptions } from '@mui/material'
import { deepmerge } from '@mui/utils'

import breakpoints from './breakpoints'
import Overrides from './overrides'
import palette from './palette'
// ** Theme Override Imports
import shadows from './shadows'
import spacing from './spacing'
import { type Settings } from './types'
import typography from './typography'

const themeOptions = (settings: Settings): ThemeOptions => {
  const userThemeConfig: ThemeOptions = Object.assign({})
  const { skin, themeColor } = settings

  const mergedThemeConfig: ThemeOptions = deepmerge(
    {
      breakpoints: breakpoints(),
      components: Overrides(settings),
      palette: palette(skin),
      ...spacing,
      shape: {
        borderRadius: 6
      },
      mixins: {
        toolbar: {
          minHeight: 64
        }
      },
      shadows: shadows(),
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
            : palette(skin).primary)
        }
      }
    },
    mergedThemeConfig
  )
}

export default themeOptions

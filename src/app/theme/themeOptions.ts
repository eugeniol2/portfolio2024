// ** MUI Theme Provider
import { type ThemeOptions } from '@mui/material'
import { deepmerge } from '@mui/utils'

import breakpoints from './breakpoints'
import overrides from './overrides'
import palette from './palette'
// ** Theme Override Imports
import shadows from './shadows'
import spacing from './spacing'
import { type Settings } from './types'
import typography from './typography'

const themeOptions = (settings: Settings): ThemeOptions => {
  const userThemeConfig: ThemeOptions = Object.assign({})
  const { skin, mode, themeColor } = settings

  const mergedThemeConfig: ThemeOptions = deepmerge(
    {
      breakpoints: breakpoints(),
      components: overrides(settings),
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

  return deepmerge(mergedThemeConfig, {
    palette: {
      primary: {
        ...(mergedThemeConfig.palette
          ? mergedThemeConfig.palette[themeColor]
          : palette(mode, skin).primary)
      }
    }
  })
}

export default themeOptions

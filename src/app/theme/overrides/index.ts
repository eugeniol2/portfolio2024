// ** MUI Imports
import { type ComponentsPropsList } from '@mui/material'
import { type Theme } from '@mui/material/styles'

import { type Settings } from '../types'
import MuiIconButton from './iconButton'
import MuiTypography from './typography'
import navTabs from './navTabs'

const Overrides = (settings: Settings) => {
  const { skin } = settings

  const nav = navTabs()

  return Object.assign(MuiIconButton, MuiTypography, nav) as any
}

export default Overrides

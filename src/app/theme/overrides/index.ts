// ** MUI Imports

import { type Settings } from '../types'
import MuiIconButton from './iconButton'
import navTabs from './navTabs'
import MuiTypography from './typography'

const Overrides = (settings: Settings) => {
  const nav = navTabs()

  return Object.assign(MuiIconButton, MuiTypography, nav) as any
}

export default Overrides

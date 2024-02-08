// ** MUI Imports

import { type ComponentsPropsList, type Theme } from '@mui/material/styles'

import { type Settings } from '../types'
import MuiTypography from './typography'

export interface OwnerStateThemeType {
  theme: Theme
  ownerState: ComponentsPropsList[keyof ComponentsPropsList] &
    Record<string, unknown>
}

const Overrides = (settings: Settings) => {
  return Object.assign(MuiTypography)
}

export default Overrides

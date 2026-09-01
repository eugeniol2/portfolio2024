import { atom } from 'jotai'

import { type Settings } from '../theme/types'

export const DEFAULT_SETTINGS: Settings = {
  themeColor: 'primary',
  appBar: 'fixed',
  layout: 'vertical',
  skin: 'default',
  contentWidth: 'boxed',
  appBarBlur: true,
  navCollapsed: false,
  navHidden: false,
  toastPosition: 'bottom-center',
  verticalNavToggleType: 'accordion'
}

export const settingsAtom = atom(DEFAULT_SETTINGS)

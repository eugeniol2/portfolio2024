import { atom } from 'jotai'

import { type Settings } from '../theme/types'

const initialSettings = atom({
  themeColor: 'primary',
  appBar: 'fixed',
  layout: 'vertical' /* vertical | horizontal */,
  mode: 'light' /* light | dark */,
  skin: 'default' /* default | bordered */,
  contentWidth: 'boxed' /* full | boxed */,
  appBarBlur: true /* true | false */,
  // ** Routing Configs
  routingLoader: true /* true | false */,
  navCollapsed:
    false /* true | false /*! Note: This is for Vertical navigation menu only */,
  navHidden: false /* true | false */,
  toastPosition:
    'top-right' /* top-left | top-center | top-right | bottom-left | bottom-center | bottom-right */,
  verticalNavToggleType:
    'accordion' /* accordion | collapse /*! Note: This is for Vertical navigation menu only */,
  responsiveFontSizes: false /* true | false */,
  disableRipple: false /* true | false */,
  disableCustomizer: false /* true | false */
} as Settings)

export const defaultSettingsAtom = { initialSettings }

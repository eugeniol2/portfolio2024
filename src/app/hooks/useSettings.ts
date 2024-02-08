import { useAtom } from 'jotai'
import { useCallback, useEffect } from 'react'

import { defaultSettingsAtom } from '../Atoms/defaultSettingsAtom'
import { type Settings } from '../theme/types'

const initial = {
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
} as Settings

export function useSettings() {
  const [initialSettings, setInitialSettings] = useAtom(
    defaultSettingsAtom.initialSettings
  )

  const handleSetLocalStorage = useCallback((settings: Settings) => {
    localStorage.setItem('settings', JSON.stringify(settings))
  }, [])

  useEffect(() => {
    const settings = localStorage.getItem('settings')

    if (!settings) {
      handleSetLocalStorage(initial)
      return
    }

    setInitialSettings(JSON.parse(settings) as Settings)
  }, [setInitialSettings, handleSetLocalStorage])

  useEffect(() => {
    handleSetLocalStorage(initialSettings)
  }, [initialSettings, handleSetLocalStorage])

  return { initialSettings }
}

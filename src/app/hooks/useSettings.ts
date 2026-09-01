import { useAtom } from 'jotai'
import { useEffect } from 'react'

import { settingsAtom } from '../atoms/defaultSettingsAtom'
import { type Settings } from '../theme/types'

const SETTINGS_STORAGE_KEY = 'settings'

export function useSettings() {
  const [settings, setSettings] = useAtom(settingsAtom)

  useEffect(() => {
    const storedSettings = localStorage.getItem(SETTINGS_STORAGE_KEY)

    if (storedSettings) {
      setSettings(JSON.parse(storedSettings) as Settings)
    }
  }, [setSettings])

  useEffect(() => {
    localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings))
  }, [settings])

  return { settings }
}

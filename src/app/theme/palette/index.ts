import { type Palette } from '@mui/material'

import { hexToRGBA } from 'src/app/utils/hexToRGBA'

import { tokens } from '../tokens'

const HOVER_OPACITY = 0.06
const SELECTED_OPACITY = 0.1
const DISABLED_OPACITY = 0.28
const DISABLED_BACKGROUND_OPACITY = 0.1
const FOCUS_OPACITY = 0.24
const TRACK_OPACITY = 0.06

const DefaultPalette = (skin: string): Palette => {
  const isBorderedSkin = skin === 'bordered'
  const surfaceColor = isBorderedSkin ? tokens.surfaceRaised : tokens.surface

  return {
    mode: 'dark',

    customColors: {
      main: tokens.text,
      bodyBg: tokens.background,
      trackBg: hexToRGBA(tokens.text, TRACK_OPACITY),
      avatarBg: tokens.surfaceRaised,
      tableHeaderBg: tokens.surface
    },

    common: {
      black: '#000',
      white: '#FFF'
    },
    primary: {
      main: tokens.accent,
      dark: tokens.accentDim,
      contrastText: tokens.background
    },
    secondary: {
      main: tokens.textMuted,
      contrastText: tokens.background
    },
    error: {
      main: tokens.error,
      contrastText: tokens.background
    },
    warning: {
      main: tokens.warning,
      contrastText: tokens.background
    },
    info: {
      main: tokens.accent,
      contrastText: tokens.background
    },
    success: {
      main: tokens.success,
      contrastText: tokens.background
    },
    grey: {
      50: '#F5F8FA',
      100: '#E6EDF3',
      200: '#C7D3E0',
      300: '#A7B7C8',
      400: '#93A4B8',
      500: '#7A8B9F',
      600: '#5C6C7F',
      700: '#3D4B5C',
      800: '#2B3B4D',
      900: '#1E2A38',
      A100: '#E6EDF3',
      A200: '#93A4B8',
      A400: '#5C6C7F',
      A700: '#2B3B4D'
    },
    text: {
      primary: tokens.text,
      secondary: tokens.textMuted,
      disabled: tokens.textFaint
    },
    divider: tokens.border,
    background: {
      paper: surfaceColor,
      default: tokens.background
    },
    action: {
      active: tokens.textMuted,
      hover: hexToRGBA(tokens.text, HOVER_OPACITY),
      selected: hexToRGBA(tokens.text, SELECTED_OPACITY),
      selectedOpacity: SELECTED_OPACITY,
      disabled: hexToRGBA(tokens.text, DISABLED_OPACITY),
      disabledBackground: hexToRGBA(tokens.text, DISABLED_BACKGROUND_OPACITY),
      focus: hexToRGBA(tokens.accent, FOCUS_OPACITY)
    }
  } as Palette
}

export default DefaultPalette

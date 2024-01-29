// ** Type Imports
import { type Palette } from '@mui/material'

const DefaultPalette = (mode: Palette['mode'], skin: string): Palette => {
  // ** Vars
  const whiteColor = '#FFF'
  const grayColor = '#F8F7FA'
  const lightColor = '75, 70, 92'
  const mainColor = lightColor
  const darkPaperBgColor = '#2F3349'

  const defaultBgColor = () => {
    if (skin === 'bordered') {
      return whiteColor
    } else {
      return grayColor
    }
  }

  return {
    customColors: {
      main: mainColor,
      lightPaperBg: whiteColor,
      darkPaperBg: darkPaperBgColor,
      bodyBg: grayColor,
      trackBg: 'rgba(75, 70, 92, 0.04)',
      avatarBg: '#DBDADE',
      tableHeaderBg: '#fff'
    },
    mode,
    common: {
      black: '#000',
      white: whiteColor
    },
    primary: {
      light: '#8479F2',
      main: '#6B7AA1',
      dark: '#655BD3',
      contrastText: whiteColor
    },
    secondary: {
      light: '#B2B4B8',
      main: '#A8AAAE',
      dark: '#11324D',
      contrastText: whiteColor
    },
    error: {
      light: '#ED6F70',
      main: '#EA5455',
      dark: '#CE4A4B',
      contrastText: whiteColor
    },
    warning: {
      light: '#FFAB5A',
      main: '#FF9F43',
      dark: '#E08C3B',
      contrastText: whiteColor
    },
    info: {
      light: '#1FD5EB',
      main: '#00CFE8',
      dark: '#00B6CC',
      contrastText: whiteColor
    },
    success: {
      light: '#42CE80',
      main: '#28C76F',
      dark: '#23AF62',
      contrastText: whiteColor
    },
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#F5F5F5',
      A200: '#EEEEEE',
      A400: '#BDBDBD',
      A700: '#616161'
    },
    text: {
      primary: `rgba(${mainColor}, 1)`,
      secondary: `rgba(${mainColor}, 0.68)`,
      disabled: `rgba(${mainColor}, 0.42)`
    },
    divider: `rgba(${mainColor}, 0.16)`,
    background: {
      paper: grayColor,
      default: defaultBgColor()
    },
    action: {
      active: `rgba(${mainColor}, 0.54)`,
      hover: `rgba(${mainColor}, 0.04)`,
      selected: `rgba(${mainColor}, 0.06)`,
      selectedOpacity: 0.06,
      disabled: `rgba(${mainColor}, 0.26)`,
      disabledBackground: `rgba(${mainColor}, 0.12)`,
      focus: `rgba(${mainColor}, 0.12)`
    }
  } as Palette
}

export default DefaultPalette

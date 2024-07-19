// ** Type Imports
import { type Palette } from '@mui/material'

const DefaultPalette = (skin: string): Palette => {
  // ** Vars
  const whiteColor = '#FFF'
  const grayColor = '#F8F7FA'
  const mainColor = '19, 21, 23'

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

      bodyBg: grayColor,
      trackBg: 'rgba(75, 70, 92, 0.04)',
      avatarBg: '#DBDADE',
      tableHeaderBg: '#fff'
    },

    common: {
      black: '#000',
      white: whiteColor
    },
    primary: {
      main: '#212121',
      contrastText: whiteColor
    },
    secondary: {
      main: '#A8AAAE',
      contrastText: whiteColor
    },
    error: {
      main: '#EA5455',
      contrastText: whiteColor
    },
    warning: {
      main: '#FF9F43',
      contrastText: whiteColor
    },
    info: {
      main: '#00CFE8',
      contrastText: whiteColor
    },
    success: {
      main: '#28C76F',
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

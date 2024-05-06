declare module '@mui/material/styles' {
  interface Palette {
    customColors: {
      main: string
      bodyBg: string
      trackBg: string
      avatarBg: string
      tableHeaderBg: string
    }
  }
  interface PaletteOptions {
    customColors?: {
      main?: string
      bodyBg?: string
      trackBg?: string
      avatarBg?: string
      tableHeaderBg?: string
    }
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    tonal: true
  }
}

declare module '@mui/material/ButtonGroup' {
  interface ButtonGroupPropsVariantOverrides {
    tonal: true
  }
}

export interface Settings {
  skin: 'default' | 'bordered'
  appBar?: 'fixed' | 'static' | 'hidden'
  navHidden?: boolean // navigation menu
  appBarBlur: boolean
  navCollapsed: boolean
  themeColor: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'
  contentWidth: 'full' | 'boxed'
  layout?: 'vertical' | 'horizontal'
  lastLayout?: 'vertical' | 'horizontal'
  verticalNavToggleType: 'accordion' | 'collapse'
  toastPosition?:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'
}

export {}

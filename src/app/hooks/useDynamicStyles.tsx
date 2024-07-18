// src/app/styles/useHomeStyles.js

import { useMediaQuery, useTheme } from '@mui/material'

import responsiveStyles from 'src/app/styles/responsive'

const useDynamicStyles = () => {
  const theme = useTheme()

  const isXs = useMediaQuery(theme.breakpoints.down('xs'))
  const isSm = useMediaQuery(theme.breakpoints.down('sm'))
  const isMd = useMediaQuery(theme.breakpoints.down('md'))

  let styles = responsiveStyles.lgStyles
  if (isXs) styles = responsiveStyles.xsStyles
  else if (isSm) styles = responsiveStyles.smStyles
  else if (isMd) styles = responsiveStyles.mdStyles

  return {
    isXs,
    isSm,
    isMd,
    global: {
      container: {
        display: 'flex',
        flexDirection: styles.container.flexDirection,
        justifyContent: styles.container.justifyContent,
        height: '100%',
        alignItems: 'center',
        marginBottom: '10%',
        marginRight: '5%',
        padding: styles.container.padding
      },
      box: {
        display: 'flex',
        width: isSm ? '100%' : '50%'
      },
      text: {
        marginTop: '16px',
        textAlign: 'justify',
        ...styles.typography
      }
    },
    about: {
      image: {
        borderRadius: '50%',
        width: styles.image.width,
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
      }
    }
  }
}

export default useDynamicStyles

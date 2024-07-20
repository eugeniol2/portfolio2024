// src/app/styles/useHomeStyles.js

import { useMediaQuery, useTheme } from '@mui/material'

import responsiveStyles from 'src/app/styles/responsive'

const useDynamicStyles = () => {
  const theme = useTheme()

  const isXs = useMediaQuery(theme.breakpoints.down('xs'))
  const isSm = useMediaQuery(theme.breakpoints.down('sm'))
  const isMd = useMediaQuery(theme.breakpoints.down('md'))
  const isLg = useMediaQuery(theme.breakpoints.down('lg'))

  let styles = responsiveStyles.defaultStyles
  if (isXs) styles = responsiveStyles.xsStyles
  else if (isSm) styles = responsiveStyles.smStyles
  else if (isMd) styles = responsiveStyles.mdStyles
  else if (isLg) styles = responsiveStyles.lgStyles

  return {
    isXs,
    isSm,
    isMd,
    isLg,
    global: {
      container: {
        display: 'flex',
        flexDirection: styles.container.flexDirection,
        justifyContent: styles.container.justifyContent,
        height: '100%',
        alignItems: 'center',
        marginBottom: '10%',
        marginX: styles.container.marginX
      },
      box: {
        display: 'flex',
        width: styles.box
      },
      text: {
        marginTop: '16px',
        textAlign: 'justify',
        ...styles.typography
      }
    },
    home: {
      image: {
        width: styles.image.homeImage
      }
    },
    about: {
      image: {
        borderRadius: '50%',
        width: styles.image.aboutImage,
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
      }
    },
    projects: {
      padding: '0 64px'
    }
  }
}

export default useDynamicStyles

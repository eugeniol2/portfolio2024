// components/Logo.js
import { Fade, Typography } from '@mui/material'
import React from 'react'

interface LogoProps {
  fade?: boolean
}

const Logo: React.FC<LogoProps> = ({ fade }) => {
  const logoContent = (
    <Typography
      component="div"
      fontFamily="Shadows Into Light"
      fontSize="36px"
      fontWeight={200}
      sx={{ color: 'grey.900' }}
    >
      Eugênio Araújo
    </Typography>
  )

  return fade ? (
    <Fade in={true} timeout={3000}>
      {logoContent}
    </Fade>
  ) : (
    logoContent
  )
}

export default Logo

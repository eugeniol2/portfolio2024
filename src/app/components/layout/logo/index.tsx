// components/Logo.js
import { Fade, Typography } from '@mui/material'
import React from 'react'

const Logo = () => {
  return (
    <Fade in={true} timeout={3000}>
      <Typography
        component="div"
        fontFamily="Shadows Into Light"
        fontSize="48px"
        fontWeight={200}
        sx={{ color: 'grey.800' }}
      >
        Eugênio Araújo
      </Typography>
    </Fade>
  )
}

export default Logo

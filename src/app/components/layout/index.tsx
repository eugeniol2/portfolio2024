import { Box } from '@mui/material'
import React from 'react'

import { layout } from 'src/app/theme/tokens'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      component="main"
      sx={{
        width: '100%',
        maxWidth: layout.contentMaxWidth,
        marginX: 'auto',
        paddingX: { xs: 5, sm: 8, md: 12 },
        paddingTop: { xs: 12, md: 20 },
        paddingBottom: { xs: 20, md: 32 }
      }}
    >
      {children}
    </Box>
  )
}

export default Layout

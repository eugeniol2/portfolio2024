// components/Layout.js
import { Box } from '@mui/material'
import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      height="calc(100vh - 48px)"
      display="flex"
      alignContent="center"
      justifyContent="center"
    >
      {children}
    </Box>
  )
}

export default Layout

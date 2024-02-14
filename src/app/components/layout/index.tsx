// components/Layout.js
import React, { type ReactElement } from 'react'
import Link from 'next/link'
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Box,
  Stack
} from '@mui/material'

interface LayoutProps {
  children: ReactElement | ReactElement[]
}

const Layout = ({ children }: LayoutProps) => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <Box>
      <Stack flexDirection="row" alignItems="center" justifyContent="center">
        <Typography variant="h6" component="div">
          My App
        </Typography>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Home" />
          <Tab label="About" />
          <Tab label="Contact" />
        </Tabs>
      </Stack>
      <Box>{children}</Box>
    </Box>
  )
}

export default Layout

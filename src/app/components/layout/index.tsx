// components/Layout.js
import { Box, Button, Stack, Tab, Tabs, Typography } from '@mui/material'
import React, { type ReactElement } from 'react'

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
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        marginX="36px"
      >
        <Button variant="contained">
          <Typography variant="h6" component="div">
            Logo
          </Typography>
        </Button>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Home" disableRipple />
          <Tab label="About" disableRipple />
          <Tab label="Contact" disableRipple />
        </Tabs>
      </Stack>
      <Box>{children}</Box>
    </Box>
  )
}

export default Layout

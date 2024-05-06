// components/Layout.js
import { Box, Stack, Tab, Tabs, Typography } from '@mui/material'
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
        <Typography variant="h3" component="div">
          Eugênio Araújo
        </Typography>

        <Tabs value={value} onChange={handleChange}>
          <Tab label="Home" disableRipple />
          <Tab label="About-Me" disableRipple />
          <Tab label="Projects" disableRipple />
          <Tab label="Resume" disableRipple />
          <Tab label="Skills" disableRipple />
          <Tab label="Contact" disableRipple />
        </Tabs>
      </Stack>
      <Box
        style={{
          margin: '32px 32px 0px 32px'
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default Layout

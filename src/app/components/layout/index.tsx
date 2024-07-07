// components/Layout.js
import { Box, Stack, Tab, Tabs, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter()
  const [value, setValue] = React.useState(0)

  const routes = ['/', '/about', '/projects', '/contact']

  useEffect(() => {
    const currentRoute = routes.indexOf(router.pathname)
    setValue(currentRoute !== -1 ? currentRoute : 0)
  }, [router.pathname])

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
    router.push(routes[newValue])
  }

  return (
    <>
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Tabs value={value} onChange={handleChange} sx={{ marginLeft: 'auto' }}>
          {['Home', 'About Me', 'Projects', 'Contact'].map((label, index) => (
            <Tab key={index} label={label} disableRipple />
          ))}
        </Tabs>
      </Stack>
      <Box display="flex" minHeight="100vh" margin="32px">
        {children}
      </Box>
    </>
  )
}

export default Layout

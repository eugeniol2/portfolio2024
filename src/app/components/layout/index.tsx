// components/Layout.js
import { Box, Stack, Tab, Tabs } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

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
      <Box
        display="flex"
        flexDirection="column"
        marginX="32px"
        height="calc(100vh - 48px)"
      >
        {children}
      </Box>
    </>
  )
}

export default Layout

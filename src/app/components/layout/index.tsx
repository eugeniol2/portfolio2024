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
        marginX="36px"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '10px 0'
        }}
      >
        <Typography
          variant="h3"
          component="div"
          fontFamily="Shadows Into Light"
        >
          Eugênio Araújo
        </Typography>

        <Tabs value={value} onChange={handleChange}>
          {['Home', 'About Me', 'Projects', 'Contact'].map((label, index) => (
            <Tab key={index} label={label} disableRipple />
          ))}
        </Tabs>
      </Stack>
      <Box margin="192px 32px 0px 32px">{children}</Box>
    </>
  )
}

export default Layout

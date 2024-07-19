// components/Layout.js
import { Stack, Tab, Tabs } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Logo from '../logo'

const Header = () => {
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
      <Stack flexDirection="row" alignItems="center" justifyContent="center">
        {/* <Logo /> */}
        <Tabs value={value} onChange={handleChange}>
          {['Home', 'About Me', 'Projects', 'Contact'].map((label, index) => (
            <Tab key={index} label={label} disableRipple />
          ))}
        </Tabs>
      </Stack>
    </>
  )
}

export default Header

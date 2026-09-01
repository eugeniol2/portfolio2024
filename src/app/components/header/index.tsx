import { Box, Tab, Tabs } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import { layout, tokens } from 'src/app/theme/tokens'
import { formatOrder } from 'src/app/utils/formatOrder'
import { hexToRGBA } from 'src/app/utils/hexToRGBA'

import Logo from '../logo'

const NAV_ITEMS = [
  { href: '/', label: 'Início' },
  { href: '/about', label: 'Sobre' },
  { href: '/projects', label: 'Projetos' },
  { href: '/contact', label: 'Contato' }
]

const ROUTE_NOT_FOUND = -1
const HOME_TAB_INDEX = 0
const HEADER_OPACITY = 0.72
const BACKDROP_BLUR = 'blur(12px)'

const Header = () => {
  const router = useRouter()
  const [activeTabIndex, setActiveTabIndex] = useState(HOME_TAB_INDEX)

  useEffect(() => {
    const matchedIndex = NAV_ITEMS.findIndex(
      item => item.href === router.pathname
    )

    setActiveTabIndex(
      matchedIndex === ROUTE_NOT_FOUND ? HOME_TAB_INDEX : matchedIndex
    )
  }, [router.pathname])

  const handleTabChange = (event: React.SyntheticEvent, tabIndex: number) => {
    setActiveTabIndex(tabIndex)
    void router.push(NAV_ITEMS[tabIndex].href)
  }

  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: theme => theme.zIndex.appBar,
        borderBottom: '1px solid',
        borderColor: 'divider',
        backgroundColor: hexToRGBA(tokens.background, HEADER_OPACITY),
        backdropFilter: BACKDROP_BLUR,
        WebkitBackdropFilter: BACKDROP_BLUR
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: layout.contentMaxWidth,
          marginX: 'auto',
          paddingX: { xs: 5, sm: 8, md: 12 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: { xs: 'flex-start', sm: 'space-between' },
          gap: 6
        }}
      >
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Logo shouldPulse />
        </Box>

        <Tabs
          value={activeTabIndex}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons={false}
          aria-label="Navegação principal"
          sx={{
            marginX: { xs: -2, sm: 0 },
            '& .MuiTabs-flexContainer': { gap: { xs: 0, sm: 2 } },
            '& .MuiTab-root': { paddingX: { xs: 2.5, sm: 4 } }
          }}
        >
          {NAV_ITEMS.map((item, index) => (
            <Tab
              key={item.href}
              label={item.label}
              disableRipple
              sx={{
                '&::before': {
                  content: `"${formatOrder(index + 1)}"`,
                  display: { xs: 'none', sm: 'inline' },
                  marginRight: '0.5em',
                  color: tokens.textFaint,
                  fontSize: '0.625rem'
                }
              }}
            />
          ))}
        </Tabs>
      </Box>
    </Box>
  )
}

export default Header

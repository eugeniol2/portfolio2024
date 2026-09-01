import { Box, Stack, type SxProps, type Theme, Typography } from '@mui/material'
import React, { type ReactNode } from 'react'

import { formatOrder } from 'src/app/utils/formatOrder'

import Reveal from '../reveal'

interface SectionProps {
  order: number
  title: string
  children: ReactNode
  sx?: SxProps<Theme>
}

const Section: React.FC<SectionProps> = ({ order, title, children, sx }) => {
  return (
    <Box component="section" sx={sx}>
      <Reveal>
        <Stack direction="row" alignItems="center" gap={4} sx={{ mb: 8 }}>
          <Typography variant="overline" component="h2" sx={{ m: 0 }}>
            {formatOrder(order)} / {title}
          </Typography>
          <Box
            aria-hidden="true"
            sx={{
              flex: 1,
              height: '1px',
              background: theme =>
                `linear-gradient(90deg, ${theme.palette.divider}, transparent)`
            }}
          />
        </Stack>
      </Reveal>
      {children}
    </Box>
  )
}

export default Section

import { Box, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

import { fonts, tokens, transitions } from 'src/app/theme/tokens'
import { hexToRGBA } from 'src/app/utils/hexToRGBA'

const MARK_CLASS = 'logo-mark'
const MARK_SIZE = 8
const MARK_GLOW_OPACITY = 0.6
const MARK_GLOW_HOVER_OPACITY = 0.9
const PULSE_DURATION = '2.4s'
const PULSE_DIM_OPACITY = 0.4

interface LogoProps {
  shouldPulse?: boolean
}

const Logo: React.FC<LogoProps> = ({ shouldPulse = false }) => {
  return (
    <Stack
      component={Link}
      href="/"
      direction="row"
      alignItems="center"
      gap={3}
      aria-label="Eugênio Araújo, início"
      sx={{
        textDecoration: 'none',
        [`&:hover .${MARK_CLASS}`]: {
          boxShadow: `0 0 14px 0 ${hexToRGBA(
            tokens.accent,
            MARK_GLOW_HOVER_OPACITY
          )}`
        }
      }}
    >
      <Box
        className={MARK_CLASS}
        aria-hidden="true"
        sx={{
          width: MARK_SIZE,
          height: MARK_SIZE,
          backgroundColor: 'primary.main',
          boxShadow: `0 0 10px 0 ${hexToRGBA(
            tokens.accent,
            MARK_GLOW_OPACITY
          )}`,
          transition: `box-shadow ${transitions.medium}`,
          animation: shouldPulse
            ? `logoPulse ${PULSE_DURATION} ease-in-out infinite`
            : 'none',
          '@keyframes logoPulse': {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: PULSE_DIM_OPACITY }
          }
        }}
      />
      <Typography
        component="span"
        sx={{
          fontFamily: fonts.mono,
          fontSize: '0.8125rem',
          fontWeight: 500,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: 'text.primary',
          whiteSpace: 'nowrap'
        }}
      >
        Eugênio Araújo
      </Typography>
    </Stack>
  )
}

export default Logo

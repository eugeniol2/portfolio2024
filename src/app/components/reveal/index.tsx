import { Box, type SxProps, type Theme } from '@mui/material'
import React, { type ReactNode } from 'react'

import { useInView } from 'src/app/hooks/useInView'

const REVEAL_ATTRIBUTE = 'data-reveal'
const STAGGER_STEP_MS = 60
const DURATION_MS = 620
const EASING = 'cubic-bezier(0.22, 1, 0.36, 1)'
const HIDDEN_OFFSET = '0.875rem'

export const NO_SCRIPT_REVEAL_CSS = `[${REVEAL_ATTRIBUTE}]{opacity:1 !important;transform:none !important}`

interface RevealProps {
  children: ReactNode
  order?: number
  sx?: SxProps<Theme>
}

const Reveal: React.FC<RevealProps> = ({ children, order = 0, sx }) => {
  const { ref, isInView } = useInView<HTMLDivElement>()
  const delayMs = order * STAGGER_STEP_MS
  const animatedProperties = ['opacity', 'transform']
    .map(property => `${property} ${DURATION_MS}ms ${EASING} ${delayMs}ms`)
    .join(', ')

  return (
    <Box
      ref={ref}
      {...{ [REVEAL_ATTRIBUTE]: '' }}
      sx={[
        {
          opacity: isInView ? 1 : 0,
          transform: isInView
            ? 'translateY(0)'
            : `translateY(${HIDDEN_OFFSET})`,
          transition: animatedProperties
        },
        ...(Array.isArray(sx) ? sx : [sx])
      ]}
    >
      {children}
    </Box>
  )
}

export default Reveal

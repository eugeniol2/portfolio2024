import { Box } from '@mui/material'
import React, { type ReactNode } from 'react'

import { fonts, tokens, transitions } from 'src/app/theme/tokens'

interface TagProps {
  children: ReactNode
}

const Tag: React.FC<TagProps> = ({ children }) => {
  return (
    <Box
      sx={{
        fontFamily: fonts.mono,
        fontSize: '0.6875rem',
        letterSpacing: '0.08em',
        color: 'text.secondary',
        border: '1px solid',
        borderColor: 'divider',
        paddingX: 2.5,
        paddingY: 1,
        transition: `color ${transitions.fast}, border-color ${transitions.fast}`,
        '&:hover': {
          color: 'primary.main',
          borderColor: tokens.accentDim
        }
      }}
    >
      {children}
    </Box>
  )
}

export default Tag

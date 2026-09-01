import GitHubIcon from '@mui/icons-material/GitHub'
import PublicIcon from '@mui/icons-material/Public'
import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'

import Reveal from 'src/app/components/reveal'
import Tag from 'src/app/components/tag'
import { fonts, tokens, transitions } from 'src/app/theme/tokens'
import { formatOrder } from 'src/app/utils/formatOrder'
import { hexToRGBA } from 'src/app/utils/hexToRGBA'

const IMAGE_CLASS = 'project-image'
const IMAGE_ASPECT_RATIO = '16 / 9'
const IMAGE_IDLE_FILTER = 'grayscale(0.4) contrast(1.05)'
const IMAGE_HOVER_FILTER = 'grayscale(0) contrast(1)'
const IMAGE_HOVER_SCALE = 'scale(1.02)'
const CORNER_TICK_SIZE = '0.75rem'
const CARD_GLOW_OPACITY = 0.9

interface ProjectCardProps {
  title: string
  cardImage: string
  description: string
  projectUrl: string
  projectSourceCode: string
  tags: string[]
  order: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  cardImage,
  description,
  projectSourceCode,
  projectUrl,
  tags,
  order
}) => {
  const hasImage = Boolean(cardImage)
  const hasTags = tags.length > 0

  const cornerTick = {
    content: '""',
    position: 'absolute',
    width: CORNER_TICK_SIZE,
    height: CORNER_TICK_SIZE,
    borderColor: 'primary.main',
    opacity: 0,
    transition: `opacity ${transitions.medium}`,
    pointerEvents: 'none'
  }

  return (
    <Reveal>
      <Box
        component="article"
        sx={{
          position: 'relative',
          border: '1px solid',
          borderColor: 'divider',
          backgroundColor: 'background.paper',
          transition: `border-color ${transitions.medium}, box-shadow ${transitions.medium}`,
          '&:hover': {
            borderColor: tokens.accentDim,
            boxShadow: `0 0 40px -24px ${hexToRGBA(
              tokens.accent,
              CARD_GLOW_OPACITY
            )}`
          },
          '&::before': {
            ...cornerTick,
            top: '-1px',
            left: '-1px',
            borderTop: '1px solid',
            borderLeft: '1px solid'
          },
          '&::after': {
            ...cornerTick,
            bottom: '-1px',
            right: '-1px',
            borderBottom: '1px solid',
            borderRight: '1px solid'
          },
          '&:hover::before, &:hover::after': { opacity: 1 },
          [`&:hover .${IMAGE_CLASS}`]: {
            filter: IMAGE_HOVER_FILTER,
            transform: IMAGE_HOVER_SCALE
          }
        }}
      >
        {hasImage && (
          <Box
            sx={{
              overflow: 'hidden',
              borderBottom: '1px solid',
              borderColor: 'divider'
            }}
          >
            <Box
              className={IMAGE_CLASS}
              component="img"
              src={cardImage}
              alt={`Captura de tela do projeto ${title}`}
              loading="lazy"
              decoding="async"
              sx={{
                display: 'block',
                width: '100%',
                aspectRatio: IMAGE_ASPECT_RATIO,
                objectFit: 'cover',
                filter: IMAGE_IDLE_FILTER,
                transition: `filter ${transitions.slow}, transform ${transitions.slow}`
              }}
            />
          </Box>
        )}

        <Stack gap={5} sx={{ padding: { xs: 6, md: 8 } }}>
          <Stack direction="row" alignItems="baseline" gap={4}>
            <Typography
              component="span"
              aria-hidden="true"
              sx={{
                fontFamily: fonts.mono,
                fontSize: '0.75rem',
                color: 'primary.main'
              }}
            >
              {formatOrder(order)}
            </Typography>
            <Typography variant="h3" component="h2">
              {title}
            </Typography>
          </Stack>

          <Typography variant="body1" color="text.secondary">
            {description}
          </Typography>

          {hasTags && (
            <Stack direction="row" flexWrap="wrap" gap={2}>
              {tags.map(tag => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </Stack>
          )}

          <Stack direction="row" flexWrap="wrap" gap={4} sx={{ marginTop: 2 }}>
            <Button
              variant="contained"
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<PublicIcon fontSize="small" />}
              disabled={!projectUrl}
            >
              Ver online
            </Button>
            <Button
              variant="outlined"
              href={projectSourceCode}
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<GitHubIcon fontSize="small" />}
              disabled={!projectSourceCode}
            >
              Código
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Reveal>
  )
}

export default ProjectCard

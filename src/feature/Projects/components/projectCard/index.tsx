import GitHubIcon from '@mui/icons-material/GitHub'
import PublicIcon from '@mui/icons-material/Public'
import { Box, Button, Paper, Stack, Typography } from '@mui/material'
import { Image } from 'antd'
import React from 'react'

import { ModalButton } from './modalButton'

interface ProjectCardProps {
  title: string
  cardImage: string
  description: string
  projectUrl: string
  projectSourceCode: string
  tags: string[]
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  cardImage,
  description,
  projectSourceCode,
  projectUrl,
  tags
}) => {
  return (
    <Box
      sx={{
        paddingBottom: '32px',
        textAlign: 'left',
        width: '75%',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}
    >
      <Typography variant="h1">{title}</Typography>
      <Box display="flex" alignContent="center" justifyContent="center">
        <Box>
          <Image src={cardImage} height="auto" width="100%" preview={false} />
        </Box>
      </Box>

      <Typography variant="body1" textAlign={{ xs: 'center', lg: 'unset' }}>
        {description}
      </Typography>
      <Box display="flex" justifyContent="space-between">
        <Stack flexDirection="row" gap="16px">
          <Paper
            sx={{
              display: { lg: 'block', xs: 'none' },
              boxShadow: 'none',
              border: 'none',
              background: 'none'
            }}
          >
            <Button
              variant="contained"
              color="primary"
              href={projectSourceCode}
              target="_blank"
              endIcon={<GitHubIcon />}
              disabled={!projectSourceCode}
            >
              Code
            </Button>
          </Paper>
          <Button
            variant="outlined"
            color="primary"
            href={projectUrl}
            target="_blank"
            endIcon={<PublicIcon />}
            disabled={!projectUrl}
          >
            Website
          </Button>
        </Stack>
        <ModalButton tags={tags} />
      </Box>
    </Box>
  )
}

export default ProjectCard

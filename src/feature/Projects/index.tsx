import { Box, Stack, Typography } from '@mui/material'
import { Image } from 'antd'
import React from 'react'

import { type ProjectsType } from './types/projectsType'

interface ProjectsProps extends ProjectsType {}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <Stack
      flexDirection="column"
      alignItems="center"
      sx={{ padding: 2, marginX: '20%', marginTop: '36px' }}
    >
      <Typography variant="h1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        dignissimos, sunt cumque ratione doloribus praesentium pariatur at
        fugiat quis quaerat porro nihil molestiae officia soluta, tempore odio,
        obcaecati excepturi ullam.
      </Typography>
      <Typography variant="h1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        dignissimos, sunt cumque ratione doloribus praesentium pariatur at
        fugiat quis quaerat porro nihil molestiae officia soluta, tempore odio,
        obcaecati excepturi ullam.
      </Typography>
      <Typography variant="h1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        dignissimos, sunt cumque ratione doloribus praesentium pariatur at
        fugiat quis quaerat porro nihil molestiae officia soluta, tempore odio,
        obcaecati excepturi ullam.
      </Typography>
      <Typography variant="h1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        dignissimos, sunt cumque ratione doloribus praesentium pariatur at
        fugiat quis quaerat porro nihil molestiae officia soluta, tempore odio,
        obcaecati excepturi ullam.
      </Typography>
      <Typography variant="h1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        dignissimos, sunt cumque ratione doloribus praesentium pariatur at
        fugiat quis quaerat porro nihil molestiae officia soluta, tempore odio,
        obcaecati excepturi ullam.
      </Typography>
      <Typography variant="h1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        dignissimos, sunt cumque ratione doloribus praesentium pariatur at
        fugiat quis quaerat porro nihil molestiae officia soluta, tempore odio,
        obcaecati excepturi ullam.
      </Typography>
      <Typography variant="h1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        dignissimos, sunt cumque ratione doloribus praesentium pariatur at
        fugiat quis quaerat porro nihil molestiae officia soluta, tempore odio,
        obcaecati excepturi ullam.
      </Typography>
      <Typography variant="h1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        dignissimos, sunt cumque ratione doloribus praesentium pariatur at
        fugiat quis quaerat porro nihil molestiae officia soluta, tempore odio,
        obcaecati excepturi ullam.
      </Typography>
      {projects.map(project => (
        <Box key={project.uid}>
          <Image src={project.cardImage} height="auto" width="100%" />
        </Box>
      ))}
    </Stack>
  )
}

export default Projects

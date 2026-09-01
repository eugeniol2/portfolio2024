import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

import Reveal from 'src/app/components/reveal'

import ProjectCard from './components/projectCard'
import { type ProjectListProps } from './types/projectsType'

const Projects: React.FC<ProjectListProps> = ({ projects }) => {
  const hasProjects = projects.length > 0
  const countLabel = projects.length === 1 ? 'projeto' : 'projetos'

  return (
    <Stack gap={{ xs: 14, md: 20 }}>
      <Box>
        <Reveal>
          <Typography variant="overline">
            {projects.length} {countLabel}
          </Typography>
        </Reveal>
        <Reveal order={1}>
          <Typography variant="h1" sx={{ marginTop: 3 }}>
            Projetos
          </Typography>
        </Reveal>
      </Box>

      {hasProjects ? (
        <Stack gap={{ xs: 10, md: 14 }}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.uid}
              order={index + 1}
              title={project.title}
              cardImage={project.cardImage}
              description={project.description}
              projectUrl={project.projectUrl}
              projectSourceCode={project.projectSourceCode}
              tags={project.tags}
            />
          ))}
        </Stack>
      ) : (
        <Reveal>
          <Typography variant="h6" color="text.secondary">
            Nenhum projeto para mostrar no momento.
          </Typography>
        </Reveal>
      )}
    </Stack>
  )
}

export default Projects

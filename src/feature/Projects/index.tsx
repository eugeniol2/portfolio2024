import { Stack } from '@mui/material'
import React from 'react'

import ProjectCard from './components/projectCard'
import { type ProjectsType } from './types/projectsType'

interface ProjectsProps extends ProjectsType {}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <Stack
      flexDirection="column"
      alignItems="center"
      sx={{
        marginX: '64px',
        gap: '64px',
        paddingTop: '64px'
      }}
    >
      {projects.map(project => (
        <ProjectCard
          key={project.uid}
          title={project.title}
          cardImage={project.cardImage}
          description={project.description}
          projectUrl={project.projectUrl}
          projectSourceCode={project.projectSourceCode}
          tags={project.tags}
        />
      ))}
    </Stack>
  )
}

export default Projects

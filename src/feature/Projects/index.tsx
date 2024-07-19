import { Stack } from '@mui/material'
import React from 'react'

import { type ProjectsType } from './types/projectsType'
import ProjectCard from './components/projectCard'

interface ProjectsProps extends ProjectsType {}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <Stack
      flexDirection="column"
      alignItems="center"
      sx={{ padding: 2, marginX: '20%', marginTop: '36px' }}
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

import { Stack } from '@mui/material'
import React from 'react'

import { type ProjectsType } from './types/projectsType'
import ProjectCard from './components/projectCard'
import useDynamicStyles from 'src/app/hooks/useDynamicStyles'

interface ProjectsProps extends ProjectsType {}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const styles = useDynamicStyles()

  return (
    <Stack
      sx={{
        marginX: '32px'
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

import { Grid } from '@mui/material'
import React from 'react'
import CustomCard from './components/customCard'
import { projects } from './mock/data'

const Projects = () => {
  return (
    <Grid container spacing={4} justifyContent="center">
      {projects.map((project, index) => (
        <Grid item key={index}>
          <CustomCard
            title={project.title}
            description={project.description}
            image={project.image}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default Projects

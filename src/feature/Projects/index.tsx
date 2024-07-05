import { Box, Grid, Slide } from '@mui/material'
import React from 'react'
import CustomCard from './components/customCard'
import { projects } from './mock/data'

const Projects = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {projects.map((project, index) => (
        <Grid item key={index}>
          <Slide direction="left" in={true} timeout={500 + index * 300}>
            <Box>
              <CustomCard
                title={project.title}
                description={project.description}
                image={project.image}
              />
            </Box>
          </Slide>
        </Grid>
      ))}
    </Grid>
  )
}

export default Projects

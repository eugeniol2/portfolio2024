import { Box, Grid, Slide } from '@mui/material'
import React from 'react'
import CustomCard from './components/customCard'
import { projects } from './mock/data'

const Projects = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Grid
        container
        spacing={1}
        justifyContent="center"
        sx={{ overflowX: 'hidden' }}
      >
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Slide direction="left" in={true} timeout={500 + index * 200}>
              <Box>
                <CustomCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                />
              </Box>
            </Slide>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Projects

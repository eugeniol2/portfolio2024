import { Box, Stack, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'

import Layout from 'src/app/components/layout'

const About = () => {
  return (
    <Layout>
      <Box display="flex" justifyContent="center">
        <Box margin="140px">
          <Typography
            variant="h5"
            sx={{
              marginTop: '16px'
            }}
          >
            Biografia
          </Typography>
        </Box>
      </Box>
    </Layout>
  )
}

export default About

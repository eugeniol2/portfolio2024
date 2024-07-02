import { Box, Stack, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'

import Layout from 'src/app/components/layout'

const About = () => {
  return (
    <>
      <Box display="flex" justifyContent="flex-start">
        <Stack
          display="flex"
          alignItems="center"
          flexDirection="row"
          gap="64px"
        >
          <Box>
            <Typography variant="h1">Biografia</Typography>
            <Typography
              variant="h5"
              sx={{
                marginTop: '16px'
              }}
              maxWidth="480px"
            >
              Sou de Carpina Pernambuco, e atualmente estou cursando sistemas de
              informação na UFRPE. Também estou trabalhando em pequenos projetos
              free-lancer como desenvolvedor junior front-end com tecnologias
              como, react-JS, react-native. Todo processo é feito utilizando
              metodologias Scrum.
            </Typography>
          </Box>
          <Box
            margin="140px"
            maxWidth="20%"
            sx={{
              background: 'green'
            }}
          >
            <Typography variant="h1">Picture</Typography>
          </Box>
        </Stack>
      </Box>
      <Box display="flex" justifyContent="flex-start">
        <Stack
          display="flex"
          alignItems="center"
          flexDirection="row"
          gap="64px"
        >
          <Box>
            <Typography variant="h1">Biografia</Typography>
            <Typography
              variant="h5"
              sx={{
                marginTop: '16px'
              }}
              maxWidth="480px"
            >
              Sou de Carpina Pernambuco, e atualmente estou cursando sistemas de
              informação na UFRPE. Também estou trabalhando em pequenos projetos
              free-lancer como desenvolvedor junior front-end com tecnologias
              como, react-JS, react-native. Todo processo é feito utilizando
              metodologias Scrum.
            </Typography>
          </Box>
          <Box
            margin="140px"
            maxWidth="20%"
            sx={{
              background: 'green'
            }}
          >
            <Typography variant="h1">Picture</Typography>
          </Box>
        </Stack>
      </Box>
      <Box display="flex" justifyContent="flex-start">
        <Stack
          display="flex"
          alignItems="center"
          flexDirection="row"
          gap="64px"
        >
          <Box>
            <Typography variant="h1">Biografia</Typography>
            <Typography
              variant="h5"
              sx={{
                marginTop: '16px'
              }}
              maxWidth="480px"
            >
              Sou de Carpina Pernambuco, e atualmente estou cursando sistemas de
              informação na UFRPE. Também estou trabalhando em pequenos projetos
              free-lancer como desenvolvedor junior front-end com tecnologias
              como, react-JS, react-native. Todo processo é feito utilizando
              metodologias Scrum.
            </Typography>
          </Box>
          <Box
            margin="140px"
            maxWidth="20%"
            sx={{
              background: 'green'
            }}
          >
            <Typography variant="h1">Picture</Typography>
          </Box>
        </Stack>
      </Box>
    </>
  )
}

export default About

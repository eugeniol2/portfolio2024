import { Box, Stack, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'

import Layout from 'src/app/components/layout'

const Home = () => {
  return (
    <Layout>
      <Box display="flex" justifyContent="center">
        <Box margin="140px">
          <Typography variant="h1">Olá! Sou Eugênio Dorneles Araújo</Typography>
          <Typography
            variant="h5"
            sx={{
              marginTop: '16px'
            }}
          >
            Sou de Carpina Pernambuco, e atualmente estou cursando sistemas de
            informação na UFRPE. Também estou trabalhando em pequenos projetos
            free-lancer como desenvolvedor junior front-end com tecnologias
            como, react JS. Todo processo é feito utilizando metodologias Scrum,
            pois sem isso acredito que o desenvolvimento de qualquer software
            ficaria bastante bagunçado. ecentemente trabalhei em um projeto
            mobile com react native que me deixou bastante empolgado na área
            mobile. Estou buscando uma oportunidade de emprego mais formal para
            desenvolver e aprender mais sobre tecnologia.
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
      </Box>
    </Layout>
  )
}

export default Home

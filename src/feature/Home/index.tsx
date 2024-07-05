import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding="2rem"
    >
      <Stack
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="65%"
      >
        <Typography variant="h1" textAlign="center">
          Olá! Sou <b>Eugênio Dorneles Araújo</b>.
        </Typography>

        <Typography
          variant="h5"
          sx={{
            marginTop: '16px',
            textAlign: 'center'
          }}
        >
          Olá! Gostaria de compartilhar um pouco sobre minhas{' '}
          <b>experiências e jornada</b>. Resido atualmente em{' '}
          <b>Carpina, Pernambuco</b>, e estou cursando{' '}
          <b>Sistemas de Informação na UFRPE</b>.
        </Typography>

        <Typography
          variant="h5"
          sx={{
            marginTop: '16px',
            textAlign: 'center'
          }}
        >
          Além disso, estou trabalhando em <b>pequenos projetos freelance</b>{' '}
          como desenvolvedor júnior <b>front-end</b>, utilizando tecnologias
          como <b>React JS</b>. Todo o processo de desenvolvimento é feito
          utilizando <b>metodologias Scrum</b>, pois acredito que sem elas, o
          desenvolvimento de qualquer software ficaria bastante desorganizado.
        </Typography>

        <Typography
          variant="h5"
          sx={{
            marginTop: '16px',
            textAlign: 'center'
          }}
        >
          Recentemente, trabalhei em um <b>projeto mobile com React Native</b>,
          o que me deixou bastante empolgado com a área <b>mobile</b>. Estou em
          busca de uma <b>oportunidade de emprego mais formal</b> para continuar
          desenvolvendo minhas habilidades e aprendendo mais sobre tecnologia.
        </Typography>
      </Stack>
    </Box>
  )
}

export default Home

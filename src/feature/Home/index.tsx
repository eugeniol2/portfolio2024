import { Box, Fade, Stack, Typography } from '@mui/material'
import React from 'react'
import Logo from 'src/app/components/layout/logo'

const Home = () => {
  const textProps = {
    marginTop: '16px',
    textAlign: 'justify'
  }

  return (
    <Box display="flex">
      <Stack
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="10%"
      >
        <Logo />
        <Box display="flex" width="50%" marginRight="5%">
          <Stack>
            <Fade in={true} timeout={1000}>
              <Typography variant="h2" textAlign="center">
                Olá! Sou <b>Eugênio Dorneles Araújo</b>.
              </Typography>
            </Fade>
            <Fade in={true} timeout={1200}>
              <Typography variant="h6" sx={textProps}>
                Gostaria de compartilhar um pouco sobre minhas{' '}
                <b>experiências e jornada</b>. Resido atualmente em{' '}
                <b>Carpina, Pernambuco</b>, e estou cursando{' '}
                <b>Sistemas de Informação na UFRPE</b>.
              </Typography>
            </Fade>

            <Fade in={true} timeout={1400}>
              <Typography variant="h6" sx={textProps}>
                Além disso, estou trabalhando em{' '}
                <b>pequenos projetos freelance</b> como desenvolvedor júnior{' '}
                <b>front-end</b>, utilizando tecnologias como <b>React JS</b>.
                Todo o processo de desenvolvimento é feito utilizando{' '}
                <b>metodologias Scrum</b>, pois acredito que sem elas, o
                desenvolvimento de qualquer software ficaria bastante
                desorganizado.
              </Typography>
            </Fade>

            <Fade in={true} timeout={1600}>
              <Typography variant="h6" sx={textProps}>
                Recentemente, trabalhei em um{' '}
                <b>projeto mobile com React Native</b>, o que me deixou bastante
                empolgado com a área <b>mobile</b>. Estou em busca de uma{' '}
                <b>oportunidade de emprego mais formal</b> para continuar
                desenvolvendo minhas habilidades e aprendendo mais sobre
                tecnologia.
              </Typography>
            </Fade>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

export default Home

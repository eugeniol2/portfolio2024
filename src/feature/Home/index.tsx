import { Box, Fade, Stack, Typography } from '@mui/material'
import React from 'react'

import useDynamicStyles from 'src/app/hooks/useDynamicStyles'

import { AnimatedText } from './animation/animatedText'

const Home = () => {
  const styles = useDynamicStyles()

  return (
    <Stack sx={styles.global.container}>
      <Fade in={true} timeout={1000}>
        <Box>
          <AnimatedText />
        </Box>
      </Fade>
      <Box sx={styles.global.box}>
        <Stack overflow="auto">
          <Fade in={true} timeout={1000}>
            <Typography variant="h2" textAlign="center">
              Olá! Sou <b>Eugênio Araújo</b>.
            </Typography>
          </Fade>
          <Fade in={true} timeout={1200}>
            <Typography variant="h6" sx={styles.global.text}>
              Gostaria de compartilhar um pouco sobre minhas{' '}
              <b>experiências e jornada</b>. Resido atualmente em{' '}
              <b>Carpina, Pernambuco</b>, e estou cursando{' '}
              <b>Sistemas de Informação na UFRPE</b>.
            </Typography>
          </Fade>

          <Fade in={true} timeout={1400}>
            <Typography variant="h6" sx={styles.global.text}>
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
            <Typography variant="h6" sx={styles.global.text}>
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
  )
}

export default Home

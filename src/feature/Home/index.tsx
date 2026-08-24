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
          <AnimatedText width={styles.home.image.width} />
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
              Sou <b>desenvolvedor front-end</b> e estudante de{' '}
              <b>Sistemas de Informação na UFRPE</b>. Moro em{' '}
              <b>Carpina, Pernambuco</b>, e estou disponível para trabalho{' '}
              <b>remoto</b>.
            </Typography>
          </Fade>

          <Fade in={true} timeout={1400}>
            <Typography variant="h6" sx={styles.global.text}>
              Construo aplicações <b>web e mobile</b> com <b>React</b>,{' '}
              <b>Next.js</b>, <b>React Native</b> e <b>TypeScript</b>, com foco
              em interfaces responsivas e componentes reutilizáveis. Como{' '}
              <b>freelancer</b>, entreguei projetos de ponta a ponta — do
              levantamento de requisitos com o cliente até a publicação —
              trabalhando de forma colaborativa com <b>Scrum</b>.
            </Typography>
          </Fade>

          <Fade in={true} timeout={1600}>
            <Typography variant="h6" sx={styles.global.text}>
              Fora do front-end, venho me aprofundando em{' '}
              <b>análise de dados</b> com <b>Python</b> — meu <b>TCC</b> aplica
              modelos supervisionados à detecção de anomalias em logs de
              auditoria. Estou{' '}
              <b>aberto a oportunidades de estágio ou júnior</b> em front-end —
              dá uma olhada nos meus <b>projetos</b> e fique à vontade para
              entrar em <b>contato</b>.
            </Typography>
          </Fade>
        </Stack>
      </Box>
    </Stack>
  )
}

export default Home

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
              Sou <b>desenvolvedor full-stack</b> e estudante de{' '}
              <b>Sistemas de Informação na UFRPE</b>, com conclusão prevista
              para <b>2027</b>. Moro em <b>Carpina, Pernambuco</b>, e estou
              disponível para trabalho <b>remoto</b>.
            </Typography>
          </Fade>

          <Fade in={true} timeout={1400}>
            <Typography variant="h6" sx={styles.global.text}>
              No front-end construo aplicações <b>web e mobile</b> com{' '}
              <b>React</b>, <b>Next.js</b>, <b>React Native</b> e{' '}
              <b>TypeScript</b>, escrevendo componentes reutilizáveis e
              interfaces responsivas. No back-end trabalho com <b>Node.js</b>,{' '}
              <b>Express</b>, <b>Prisma</b> e <b>PostgreSQL</b>, construindo
              APIs REST com modelagem de dados, controle transacional, validação
              de entrada e testes automatizados.
            </Typography>
          </Fade>

          <Fade in={true} timeout={1600}>
            <Typography variant="h6" sx={styles.global.text}>
              Como <b>freelancer</b>, entreguei projetos de ponta a ponta, do
              levantamento de requisitos com o cliente até a publicação. Busco{' '}
              <b>estágio ou posição júnior</b> em desenvolvimento de software.
              Dá uma olhada nos meus <b>projetos</b> e fique à vontade para
              entrar em <b>contato</b>.
            </Typography>
          </Fade>
        </Stack>
      </Box>
    </Stack>
  )
}

export default Home

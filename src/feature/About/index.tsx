import { Box, Fade, Stack, Typography } from '@mui/material'
import React from 'react'

import useDynamicStyles from 'src/app/hooks/useDynamicStyles'
import images from 'src/images'

const About = () => {
  const styles = useDynamicStyles()

  return (
    <Box sx={styles.global.container}>
      {!styles.isXs && (
        <Box
          display="flex"
          alignContent="center"
          justifyContent="center"
          width="30%"
        >
          <Fade in={true} timeout={1000}>
            <Box
              component="img"
              src={images.selfie.src}
              alt="Selfie"
              sx={styles.about.image}
            />
          </Fade>
        </Box>
      )}
      <Box sx={styles.global.box}>
        <Stack overflow="auto">
          <Fade in={true} timeout={1000}>
            <Typography variant="h2" textAlign="center">
              Biografia
            </Typography>
          </Fade>
          <Fade in={true} timeout={1200}>
            <Typography variant="h6" sx={styles.global.text}>
              Sou de <b>Pernambuco, Carpina</b>, e em 2019 comecei os estudos
              para entrar em algum curso superior, com bastante interesse de
              ingressar na área de tecnologia. Assim consegui uma vaga na{' '}
              <b>UFRPE</b>, no curso de <b>Sistemas de Informação</b>, com
              conclusão prevista para <b>2027</b>. No início foi bastante
              difícil, mas logo comecei a gostar e não só estudar os conteúdos
              acadêmicos, como outras linguagens por conta própria.
            </Typography>
          </Fade>
          <Fade in={true} timeout={1400}>
            <Typography variant="h6" sx={styles.global.text}>
              Minha atuação é em <b>desenvolvimento full-stack</b>. No front-end
              trabalho com <b>React</b>, <b>Next.js</b>, <b>React Native</b> e{' '}
              <b>TypeScript</b>, escrevendo componentes reutilizáveis e
              interfaces responsivas. No back-end, com <b>Node.js</b>,{' '}
              <b>Express</b>, <b>Prisma</b> e <b>PostgreSQL</b>, construindo
              APIs REST com modelagem de dados, controle transacional, validação
              de entrada e testes automatizados.
            </Typography>
          </Fade>
          <Fade in={true} timeout={1600}>
            <Typography variant="h6" sx={styles.global.text}>
              Como <b>freelancer</b>, entreguei aplicações web e mobile para
              clientes independentes, do levantamento de requisitos até a
              entrega e os ajustes pós-publicação. Meu projeto mais recente é
              uma <b>API de controle de estoque</b> com rastreio por fardo, em
              que o saldo é reconstruído a partir de um livro-razão de
              movimentações, a venda usa bloqueio de linha para não furar o
              estoque em compras simultâneas, e os testes rodam com{' '}
              <b>Vitest</b> contra um PostgreSQL descartável provisionado via{' '}
              <b>Docker Compose</b>.
            </Typography>
          </Fade>

          <Fade in={true} timeout={1800}>
            <Typography variant="h2" textAlign="center" marginTop="32px">
              Objetivos
            </Typography>
          </Fade>
          <Fade in={true} timeout={2000}>
            <Typography variant="h6" sx={styles.global.text}>
              Busco <b>estágio ou posição júnior</b> em{' '}
              <b>desenvolvimento de software</b>, com a chance de me aperfeiçoar
              como desenvolvedor. Sei que o dia-a-dia ensina bastante coisa,
              assim como o <b>trabalho em equipe</b>.
            </Typography>
          </Fade>
          <Fade in={true} timeout={2200}>
            <Typography variant="h6" sx={styles.global.text}>
              Pretendo seguir no <b>desenvolvimento web e mobile</b>,
              equilibrando front-end e back-end, e aprofundar o que sustenta as
              duas frentes: modelagem de dados, testes automatizados e qualidade
              de código. Em paralelo conduzo meu <b>TCC</b>, sobre detecção de
              anomalias em logs de auditoria, comparando regras estáticas e
              modelos supervisionados.
            </Typography>
          </Fade>
        </Stack>
      </Box>
    </Box>
  )
}

export default About

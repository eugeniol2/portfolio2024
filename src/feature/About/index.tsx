import { Box, Fade, Stack, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <Box display="flex" justifyContent="center" padding="2rem">
      <Stack display="flex" flexDirection="column" gap="2rem" width="65%">
        {/* Seção de Biografia */}
        <Box>
          <Fade in={true} timeout={1000}>
            <Typography variant="h2" textAlign="center">
              Biografia
            </Typography>
          </Fade>
          <Fade in={true} timeout={1200}>
            <Typography
              variant="h6"
              sx={{
                marginTop: '16px',
                lineHeight: 1.6
              }}
            >
              Sou de <b>Pernambuco, Carpina</b>, e em 2019 comecei os estudos
              para entrar em algum curso superior, e tive bastante interesse de
              ingressar na área de tecnologia, e assim consegui uma vaga na{' '}
              <b>UFRPE</b> no curso de <b>Sistemas de Informação</b>. No início
              foi bastante difícil, mas logo comecei a gostar e não só estudar
              os conteúdos acadêmicos, como outras linguagens por conta própria.
            </Typography>
          </Fade>
          <Fade in={true} timeout={1400}>
            <Typography
              variant="h6"
              sx={{
                marginTop: '16px',
                lineHeight: 1.6
              }}
            >
              Com isso, peguei amor pela programação, especificamente,{' '}
              <b>desenvolvimento WEB</b>, com <b>React.js</b> e também{' '}
              <b>React Native</b>. Tenho um conhecimento básico sobre{' '}
              <b>backend com Node.js</b>, mas pretendo me aprofundar mais.
            </Typography>
          </Fade>
        </Box>

        <Box>
          <Fade in={true} timeout={1600}>
            <Typography variant="h2" textAlign="center">
              Objetivos
            </Typography>
          </Fade>
          <Fade in={true} timeout={1800}>
            <Typography
              variant="h6"
              sx={{
                marginTop: '16px',
                lineHeight: 1.6
              }}
            >
              Meu objetivo em geral é conseguir uma{' '}
              <b>oportunidade de me aperfeiçoar</b> como desenvolvedor. Sei que
              o dia-a-dia ensina bastante coisa, assim como o{' '}
              <b>trabalho em equipe</b>.
            </Typography>
          </Fade>
          <Fade in={true} timeout={2000}>
            <Typography
              variant="h6"
              sx={{
                marginTop: '16px',
                lineHeight: 1.6
              }}
            >
              Em termos gerais, pretendo seguir com o <b>desenvolvimento WEB</b>
              , assim como <b>mobile</b>, de forma colaborativa (<b>SCRUM</b>),
              e posteriormente me aprofundar e melhorar meus conhecimentos de{' '}
              <b>back-end rumo ao full-stack</b>.
            </Typography>
          </Fade>
        </Box>
      </Stack>
    </Box>
  )
}

export default About

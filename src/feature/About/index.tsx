import { Box, Stack, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <>
      <Box display="flex" justifyContent="flex-start">
        <Stack display="flex" alignItems="center" gap="128px" width="65%">
          <Box>
            <Typography variant="h1">Biografia</Typography>
            <Typography
              variant="h5"
              sx={{
                marginTop: '16px'
              }}
            >
              Sou de Pernambuco, Carpina, e em 2019 comecei os estudos para
              entrar em algum curso superior, e tive bastante interesse de
              ingressar na área de tecnologia, e assim consegui uma vaga na
              UFRPE no curso de Sistemas de informação, no inicio foi bastante
              difícil mas logo começei a gostar e não so estudar os conteúdos
              acadêmicos como outras linguagens por conta própria.
            </Typography>
            <Typography
              variant="h5"
              sx={{
                marginTop: '16px'
              }}
            >
              Com isso peguei amor pela programação, específicamente,
              desenvolvimento WEB, com React.js e React-native , tenho um
              conhecimento padrão sobre backend com Node.js, mas pretendo me
              aprofundar mais.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h1">Objetivos</Typography>
            <Typography
              variant="h5"
              sx={{
                marginTop: '16px'
              }}
            >
              Meu objetivo em geral é conseguir uma oportunidade de me
              aperfeiçoar como desenvolvedor, sei que o dia-a-dia ensina
              bastante coisa, assim como trabalho em equipe e solução de
              desafios.
            </Typography>
            <Typography
              variant="h5"
              sx={{
                marginTop: '16px'
              }}
            >
              Em termos gerais, pretendo seguir com o desenvolvimento WEB, assim
              como mobile, de forma colaborativa (scrum), e posteriormentem e
              aprofundar e melhorar meus conhecimentos de back-end.
            </Typography>
          </Box>
        </Stack>
      </Box>
    </>
  )
}

export default About

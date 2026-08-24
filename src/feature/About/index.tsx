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
              Minha atuação é em <b>desenvolvimento front-end</b>, com{' '}
              <b>React</b>, <b>React Native</b>, <b>Next.js</b> e{' '}
              <b>TypeScript</b>, escrevendo componentes reutilizáveis e
              interfaces responsivas. Como <b>freelancer</b>, entreguei projetos
              web e mobile do levantamento de requisitos até a publicação, e no
              meio acadêmico desenvolvi o <b>Lix0</b>, app de missões de coleta
              de resíduos. Quando o projeto pede, também trabalho no back-end
              com Node.js, Prisma e PostgreSQL. 
            </Typography>
          </Fade>
          <Fade in={true} timeout={1600}>
            <Typography variant="h6" sx={styles.global.text}>
              Além do front-end, venho me aprofundando em{' '}
              <b>análise de dados e machine learning</b>. Trabalho com{' '}
              <b>Python</b>, <b>Scikit-learn</b> e <b>Pandas</b> — desenvolvi um
              modelo preditivo de risco cardíaco a partir de dados clínicos e
              hoje conduzo meu <b>TCC</b>, que compara <b>Random Forest</b> e{' '}
              <b>XGBoost</b> na detecção de anomalias em logs de auditoria, com
              explicabilidade via <b>SHAP</b>.
            </Typography>
          </Fade>

          <Fade in={true} timeout={1800}>
            <Typography variant="h2" textAlign="center" marginTop="32px">
              Objetivos
            </Typography>
          </Fade>
          <Fade in={true} timeout={2000}>
            <Typography variant="h6" sx={styles.global.text}>
              Estou <b>aberto a oportunidades de estágio ou júnior</b> em{' '}
              <b>front-end ou dados</b>, com a chance de me aperfeiçoar como
              desenvolvedor. Sei que o dia-a-dia ensina bastante coisa, assim
              como o <b>trabalho em equipe</b>.
            </Typography>
          </Fade>
          <Fade in={true} timeout={2200}>
            <Typography variant="h6" sx={styles.global.text}>
              Em termos gerais, pretendo seguir com o <b>desenvolvimento WEB</b>
              , assim como <b>mobile</b>, de forma colaborativa (<b>SCRUM</b>),
              e continuar aprofundando meus estudos em <b>análise de dados</b> e{' '}
              <b>machine learning</b>, unindo as duas frentes.
            </Typography>
          </Fade>
        </Stack>
      </Box>
    </Box>
  )
}

export default About

import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

import Reveal from 'src/app/components/reveal'
import Section from 'src/app/components/section'
import { layout, tokens, transitions } from 'src/app/theme/tokens'
import images from 'src/images'

const PORTRAIT_ASPECT_RATIO = '4 / 5'
const PORTRAIT_FRAME_OFFSET = '0.75rem'
const PORTRAIT_FRAME_OPACITY = 0.6
const PORTRAIT_IDLE_FILTER = 'grayscale(0.35) contrast(1.05)'
const PORTRAIT_HOVER_FILTER = 'grayscale(0) contrast(1)'

const Portrait = () => (
  <Box sx={{ position: 'relative' }}>
    <Box
      aria-hidden="true"
      sx={{
        position: 'absolute',
        inset: 0,
        transform: `translate(${PORTRAIT_FRAME_OFFSET}, ${PORTRAIT_FRAME_OFFSET})`,
        border: '1px solid',
        borderColor: tokens.accentDim,
        opacity: PORTRAIT_FRAME_OPACITY
      }}
    />
    <Box
      component="img"
      src={images.selfie.src}
      alt="Eugênio Araújo"
      loading="lazy"
      decoding="async"
      sx={{
        position: 'relative',
        display: 'block',
        width: '100%',
        aspectRatio: PORTRAIT_ASPECT_RATIO,
        objectFit: 'cover',
        border: '1px solid',
        borderColor: 'divider',
        filter: PORTRAIT_IDLE_FILTER,
        transition: `filter ${transitions.slow}`,
        '&:hover': { filter: PORTRAIT_HOVER_FILTER }
      }}
    />
  </Box>
)

const About = () => {
  return (
    <Stack gap={{ xs: 16, md: 24 }}>
      <Section order={1} title="Biografia">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: `${layout.portraitColumnWidth} 1fr`
            },
            gap: { xs: 10, md: 14 },
            alignItems: 'start'
          }}
        >
          <Reveal sx={{ display: { xs: 'none', md: 'block' }, minWidth: 0 }}>
            <Portrait />
          </Reveal>

          <Stack gap={6} sx={{ maxWidth: layout.proseMaxWidth, minWidth: 0 }}>
            <Reveal>
              <Typography variant="h6" color="text.secondary">
                Sou de <b>Pernambuco, Carpina</b>, e em 2019 comecei os estudos
                para entrar em algum curso superior, com bastante interesse de
                ingressar na área de tecnologia. Assim consegui uma vaga na{' '}
                <b>UFRPE</b>, no curso de <b>Sistemas de Informação</b>, com
                conclusão prevista para <b>2027</b>. No início foi bastante
                difícil, mas logo comecei a gostar e não só estudar os conteúdos
                acadêmicos, como outras linguagens por conta própria.
              </Typography>
            </Reveal>

            <Reveal order={1}>
              <Typography variant="h6" color="text.secondary">
                Minha atuação é em <b>desenvolvimento full-stack</b>. No
                front-end trabalho com <b>React</b>, <b>Next.js</b>,{' '}
                <b>React Native</b> e <b>TypeScript</b>, escrevendo componentes
                reutilizáveis e interfaces responsivas. No back-end, com{' '}
                <b>Node.js</b>, <b>Express</b>, <b>Prisma</b> e{' '}
                <b>PostgreSQL</b>, construindo APIs REST com modelagem de dados,
                controle transacional, validação de entrada e testes
                automatizados.
              </Typography>
            </Reveal>

            <Reveal order={2}>
              <Typography variant="h6" color="text.secondary">
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
            </Reveal>
          </Stack>
        </Box>
      </Section>

      <Section order={2} title="Objetivos">
        <Stack gap={6} sx={{ maxWidth: layout.proseMaxWidth }}>
          <Reveal>
            <Typography variant="h6" color="text.secondary">
              Busco <b>estágio ou posição júnior</b> em{' '}
              <b>desenvolvimento de software</b>, com a chance de me aperfeiçoar
              como desenvolvedor. Sei que o dia-a-dia ensina bastante coisa,
              assim como o <b>trabalho em equipe</b>.
            </Typography>
          </Reveal>

          <Reveal order={1}>
            <Typography variant="h6" color="text.secondary">
              Pretendo seguir no <b>desenvolvimento web e mobile</b>,
              equilibrando front-end e back-end, e aprofundar o que sustenta as
              duas frentes: modelagem de dados, testes automatizados e qualidade
              de código. Em paralelo conduzo meu <b>TCC</b>, sobre detecção de
              anomalias em logs de auditoria, comparando regras estáticas e
              modelos supervisionados.
            </Typography>
          </Reveal>
        </Stack>
      </Section>
    </Stack>
  )
}

export default About

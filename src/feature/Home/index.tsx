import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Box, Button, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

import Reveal from 'src/app/components/reveal'
import Tag from 'src/app/components/tag'
import { fonts, layout } from 'src/app/theme/tokens'

import { AnimatedText } from './animation/animatedText'

const TECH_STACK = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Prisma',
  'PostgreSQL'
]

const Home = () => {
  return (
    <Stack gap={{ xs: 16, md: 24 }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 0.9fr' },
          gap: { xs: 10, md: 16 },
          alignItems: 'center'
        }}
      >
        <Box sx={{ minWidth: 0 }}>
          <Reveal>
            <Typography variant="overline">
              Carpina, PE · Disponível para remoto
            </Typography>
          </Reveal>

          <Reveal order={1}>
            <Typography variant="h1" sx={{ marginTop: 3 }}>
              Eugênio Araújo
            </Typography>
          </Reveal>

          <Reveal order={2}>
            <Typography
              component="p"
              sx={{
                fontFamily: fonts.mono,
                fontSize: '0.875rem',
                letterSpacing: '0.06em',
                color: 'text.secondary',
                marginTop: 4
              }}
            >
              <Box component="span" sx={{ color: 'primary.main' }}>
                &gt;{' '}
              </Box>
              Desenvolvedor Full-Stack
            </Typography>
          </Reveal>

          <Reveal order={3}>
            <Stack
              direction="row"
              flexWrap="wrap"
              gap={2}
              sx={{ marginTop: 6 }}
            >
              {TECH_STACK.map(technology => (
                <Tag key={technology}>{technology}</Tag>
              ))}
            </Stack>
          </Reveal>

          <Reveal order={4}>
            <Stack
              direction="row"
              flexWrap="wrap"
              gap={4}
              sx={{ marginTop: 10 }}
            >
              <Button
                component={Link}
                href="/projects"
                variant="contained"
                endIcon={<ArrowForwardIcon fontSize="small" />}
              >
                Ver projetos
              </Button>
              <Button component={Link} href="/contact" variant="outlined">
                Falar comigo
              </Button>
            </Stack>
          </Reveal>
        </Box>

        <Reveal
          order={5}
          sx={{ justifySelf: 'center', width: '100%', minWidth: 0 }}
        >
          <AnimatedText />
        </Reveal>
      </Box>

      <Stack gap={6} sx={{ maxWidth: layout.proseMaxWidth }}>
        <Reveal>
          <Typography variant="h6" color="text.secondary">
            Sou <b>desenvolvedor full-stack</b> e estudante de{' '}
            <b>Sistemas de Informação na UFRPE</b>, com conclusão prevista para{' '}
            <b>2027</b>. Moro em <b>Carpina, Pernambuco</b>, e estou disponível
            para trabalho <b>remoto</b>.
          </Typography>
        </Reveal>

        <Reveal order={1}>
          <Typography variant="h6" color="text.secondary">
            No front-end construo aplicações <b>web e mobile</b> com{' '}
            <b>React</b>, <b>Next.js</b>, <b>React Native</b> e{' '}
            <b>TypeScript</b>, escrevendo componentes reutilizáveis e interfaces
            responsivas. No back-end trabalho com <b>Node.js</b>, <b>Express</b>
            , <b>Prisma</b> e <b>PostgreSQL</b>, construindo APIs REST com
            modelagem de dados, controle transacional, validação de entrada e
            testes automatizados.
          </Typography>
        </Reveal>

        <Reveal order={2}>
          <Typography variant="h6" color="text.secondary">
            Como <b>freelancer</b>, entreguei projetos de ponta a ponta, do
            levantamento de requisitos com o cliente até a publicação. Busco{' '}
            <b>estágio ou posição júnior</b> em desenvolvimento de software.
          </Typography>
        </Reveal>
      </Stack>
    </Stack>
  )
}

export default Home

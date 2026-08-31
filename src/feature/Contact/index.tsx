import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import {
  Box,
  Button,
  Fade,
  Link,
  Stack,
  Typography,
  useTheme
} from '@mui/material'
import React from 'react'

import useDynamicStyles from 'src/app/hooks/useDynamicStyles'

const curriculos = [
  {
    label: 'Português (PDF)',
    href: '/curriculo/Curriculo_Eugenio_Araujo_PT.pdf'
  },
  {
    label: 'English (PDF)',
    href: '/curriculo/Resume_Eugenio_Araujo_EN.pdf'
  }
]

const Contact = () => {
  const theme = useTheme()
  const styles = useDynamicStyles()

  const iconStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    textDecoration: 'none',
    color: theme.palette.grey[900],
    '&:hover': {
      color: theme.palette.primary.main
    }
  }

  return (
    <Box
      sx={{
        ...styles.global.container,
        justifyContent: 'center',
        paddingX: 'none'
      }}
    >
      <Stack flexDirection="column" alignItems="center" width="100%">
        <Fade in={true} timeout={1000}>
          <Typography
            variant="h1"
            sx={{ marginBottom: '1rem', textAlign: 'center' }}
          >
            Vamos conversar!
          </Typography>
        </Fade>
        <Fade in={true} timeout={1200}>
          <Typography
            variant="h5"
            sx={{
              textAlign: 'center',
              maxWidth: { xs: '100%', md: '50%' }
            }}
          >
            Tenho sempre tempo para uma boa conversa ou para responder a
            perguntas sobre projetos. Sinta-se à vontade para me chamar no
            WhatsApp ou por e-mail.
          </Typography>
        </Fade>
        <Fade in={true} timeout={1400}>
          <Stack alignItems="center" gap="0.5rem" marginTop="2rem">
            <Typography variant="h6" sx={{ textAlign: 'center' }}>
              Número: <b>(81) 9 8286-6285</b>
            </Typography>
            <Typography variant="h6" sx={{ textAlign: 'center' }}>
              E-mail:{' '}
              <Link
                href="mailto:Eugeniodornelesl2@gmail.com"
                sx={{ fontWeight: 700, color: 'inherit' }}
              >
                Eugeniodornelesl2@gmail.com
              </Link>
            </Typography>
          </Stack>
        </Fade>
        <Fade in={true} timeout={2000}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            marginTop="2rem"
          >
            <Typography
              variant="h6"
              sx={{ marginBottom: '0.5rem', textAlign: 'center' }}
            >
              Conecte-se comigo
            </Typography>
            <Box display="flex" gap="1rem">
              <Link
                href="https://www.linkedin.com/in/eugenio-dorneles-araujo/"
                target="_blank"
                rel="noopener noreferrer"
                sx={iconStyles}
              >
                <LinkedInIcon fontSize="large" />
              </Link>
              <Link
                href="https://github.com/eugeniol2"
                target="_blank"
                rel="noopener noreferrer"
                sx={iconStyles}
              >
                <GitHubIcon fontSize="large" />
              </Link>
            </Box>
          </Box>
        </Fade>
        <Fade in={true} timeout={2200}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            marginTop="2rem"
          >
            <Typography
              variant="h6"
              sx={{ marginBottom: '0.5rem', textAlign: 'center' }}
            >
              Currículo
            </Typography>
            <Box
              display="flex"
              flexWrap="wrap"
              justifyContent="center"
              gap="1rem"
            >
              {curriculos.map(curriculo => (
                <Button
                  key={curriculo.href}
                  variant="outlined"
                  href={curriculo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {curriculo.label}
                </Button>
              ))}
            </Box>
          </Box>
        </Fade>
      </Stack>
    </Box>
  )
}

export default Contact

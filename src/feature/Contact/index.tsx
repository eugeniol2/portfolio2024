import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import {
  Box,
  Button,
  Fade,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'
import { Image } from 'antd'
import React from 'react'

import useDynamicStyles from 'src/app/hooks/useDynamicStyles'
import images from 'src/images'

const Contact = () => {
  const theme = useTheme()
  const styles = useDynamicStyles()
  const isXs = useMediaQuery(theme.breakpoints.down('xs'))

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
              maxWidth: '50%'
            }}
          >
            Tenho sempre tempo para uma boa conversa ou para responder a
            perguntas sobre projetos. Sinta-se à vontade para me enviar uma
            mensagem pelo WhatsApp!
          </Typography>
        </Fade>
        {!isXs && (
          <Fade in={true} timeout={1400}>
            <Box>
              <Image
                src={images.qrcode.src}
                alt="QR Code para WhatsApp"
                style={{
                  width: '200px',
                  height: '200px',
                  margin: '36px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                }}
              />
            </Box>
          </Fade>
        )}
        <Fade in={true} timeout={1800}>
          <Typography variant="h6" sx={{ textAlign: 'center' }}>
            Número: <b>(81) 9 8286-6285</b>
          </Typography>
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
        <Fade in={true} timeout={1800}>
          <Button
            variant="outlined"
            sx={{
              marginTop: '20px',
              alignSelf: 'center'
            }}
            href="https://drive.google.com/file/d/11EBj0ba1tf04kvEieBqgYychH-ZcaCN7/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Currículo
          </Button>
        </Fade>
      </Stack>
    </Box>
  )
}

export default Contact

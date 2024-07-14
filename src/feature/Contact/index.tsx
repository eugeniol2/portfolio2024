import LinkedInIcon from '@mui/icons-material/LinkedIn'
import {
  Box,
  Fade,
  Link,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'
import { Image } from 'antd'
import React from 'react'

import images from 'src/images'

const Contact = () => {
  const theme = useTheme()

  const isLgUp = useMediaQuery(theme.breakpoints.up('lg'))

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent={isLgUp ? 'flex-end' : 'center'}
      alignItems="center"
      paddingRight={isLgUp ? '15%' : '0'}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        maxWidth="600px"
      >
        <Fade in={true} timeout={1000}>
          <Typography variant="h1" sx={{ marginBottom: '1rem' }}>
            Entre em Contato!
          </Typography>
        </Fade>
        <Fade in={true} timeout={1200}>
          <Typography
            variant="h5"
            sx={{ marginBottom: '2rem', textAlign: 'center' }}
          >
            Tenho sempre tempo para uma boa conversa ou para responder a
            perguntas sobre projetos. Sinta-se à vontade para me enviar uma
            mensagem pelo WhatsApp!
          </Typography>
        </Fade>
        <Fade in={true} timeout={1400}>
          <Box>
            <Image
              src={images.qrcode.src}
              alt="QR Code para WhatsApp"
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
              }}
            />
          </Box>
        </Fade>
        <Fade in={true} timeout={1600}>
          <Typography
            variant="h6"
            sx={{ marginTop: '1rem', textAlign: 'center' }}
          >
            Escaneie o QR code acima para começar uma conversa no WhatsApp!
          </Typography>
        </Fade>
        <Fade in={true} timeout={1800}>
          <Typography
            variant="h6"
            sx={{ marginTop: '1rem', textAlign: 'center' }}
          >
            Ou, se preferir, o número: <b>(81) 9 8286-6285</b>
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
              Conecte-se comigo no LinkedIn!
            </Typography>
            <Link
              href="https://www.linkedin.com/in/eugenio-dorneles-araujo/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none',
                color: '#0077b5',
                '&:hover': {
                  color: '#005582'
                }
              }}
            >
              <LinkedInIcon fontSize="large" />
              <Typography variant="h4">Eugenio Araújo</Typography>
            </Link>
          </Box>
        </Fade>
      </Box>
    </Box>
  )
}

export default Contact

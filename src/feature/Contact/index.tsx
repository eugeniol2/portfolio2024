import { Box, Typography, Link } from '@mui/material'
import { Image } from 'antd'
import React from 'react'
import images from 'src/images'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const Contact = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding="2rem"
      maxWidth="600px"
      margin="0 auto"
    >
      <Typography variant="h1" sx={{ marginBottom: '1rem' }}>
        Entre em Contato!
      </Typography>
      <Typography
        variant="h5"
        sx={{ marginBottom: '2rem', textAlign: 'center' }}
      >
        Tenho sempre tempo para uma boa conversa ou para responder a perguntas
        sobre projetos. Sinta-se à vontade para me enviar uma mensagem pelo
        WhatsApp!
      </Typography>

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

      <Typography variant="h6" sx={{ marginTop: '1rem', textAlign: 'center' }}>
        Escaneie o QR code acima para começar uma conversa no WhatsApp! Ou, se
        preferir, o número: <b>(81) 9 8286-6285</b>
      </Typography>

      {/* Seção do LinkedIn */}
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
    </Box>
  )
}

export default Contact

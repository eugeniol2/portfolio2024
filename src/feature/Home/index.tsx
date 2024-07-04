import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <>
      <Stack display="flex" flexDirection="column">
        <Typography variant="h1">Olá! Sou Eugênio Dorneles Araújo.</Typography>

        <Typography
          variant="h5"
          width="65%"
          sx={{
            marginTop: '16px'
          }}
        >
          Olá! Gostaria de compartilhar um pouco sobre minhas experiências e
          jornada. Moro em Carpina, Pernambuco, e atualmente estou cursando
          Sistemas de Informação na UFRPE.
        </Typography>

        <Typography
          variant="h5"
          width="65%"
          sx={{
            marginTop: '16px'
          }}
        >
          Além disso, estou trabalhando em pequenos projetos freelance como
          desenvolvedor júnior front-end, utilizando tecnologias como React JS.
          Todo o processo de desenvolvimento é feito utilizando metodologias
          Scrum, pois acredito que sem elas, o desenvolvimento de qualquer
          software ficaria bastante desorganizado.
        </Typography>

        <Typography
          variant="h5"
          width="65%"
          sx={{
            marginTop: '16px'
          }}
        >
          Recentemente, trabalhei em um projeto mobile com React Native, o que
          me deixou bastante empolgado com a área mobile. Estou em busca de uma
          oportunidade de emprego mais formal para continuar desenvolvendo
          minhas habilidades e aprendendo mais sobre tecnologia.
        </Typography>
      </Stack>
    </>
  )
}

export default Home

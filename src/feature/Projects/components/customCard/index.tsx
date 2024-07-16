// components/customCard.js
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography
} from '@mui/material'
import Link from 'next/link'
import router from 'next/router'
import React from 'react'

interface CustomCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  slug: string
}

const CustomCard = ({
  title,
  description,
  image,
  tags,
  slug
}: CustomCardProps) => {
  const handleClick = () => {
    router.push(`/projects/${slug}`)
  }

  return (
    <Card sx={{ maxWidth: 345, margin: '1rem' }} onClick={handleClick}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              WebkitLineClamp: 4,
              textOverflow: 'ellipsis'
            }}
          >
            {description}
          </Typography>
          <Box sx={{ marginTop: 1 }}>
            {tags.map((tag, index) => (
              <Chip key={index} label={tag} sx={{ marginRight: 0.5 }} />
            ))}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CustomCard

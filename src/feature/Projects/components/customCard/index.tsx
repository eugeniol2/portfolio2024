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
import React from 'react'

interface CustomCardProps {
  title: string
  description: string
  image: string
  tags: string[]
}

const CustomCard = ({ title, description, image, tags }: CustomCardProps) => {
  return (
    <Card sx={{ maxWidth: 345, margin: '1rem' }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
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

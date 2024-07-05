import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material'
import React from 'react'

interface CustomCardProps {
  title: string
  description: string
  image: string
}

const CustomCard = ({ title, description, image }: CustomCardProps) => {
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
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CustomCard

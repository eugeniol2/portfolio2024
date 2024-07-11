import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Chip
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
          <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
            {tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                size="small"
                variant="outlined"
                sx={{ margin: 0.5 }}
              />
            ))}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CustomCard

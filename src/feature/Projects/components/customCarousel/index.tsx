'use client' // <===== REQUIRED

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Box, styled, useTheme } from '@mui/material'

interface customCarouselProps {
  images: string[]
}

const StyledSwiper = styled(Swiper)(({ theme }) => ({
  height: '100%',
  '& .swiper-pagination-bullet': {
    backgroundColor: theme.palette.grey[900]
  }
}))

export const CustomCarousel: React.FC<customCarouselProps> = ({ images }) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '400px',
        overflow: 'hidden'
      }}
    >
      <StyledSwiper
        pagination={{
          type: 'bullets',
          clickable: true
        }}
        autoplay={{ delay: 4000 }}
        loop={true}
        modules={[Autoplay, Navigation, Pagination]}
        style={{ height: '100%' }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                height: '100%',
                width: '100%',
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </Box>
  )
}

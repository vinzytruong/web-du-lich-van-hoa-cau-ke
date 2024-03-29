import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Sites } from '@/interfaces/site'


interface Props {
  item: Sites
}

const DefaultCardItem: FC<Props> = ({ item }) => {
  return (
    <Box>
      <Box
        sx={{
          p: 2,
          backgroundColor: 'background.paper',
          borderRadius: 2,
          transition: 'transform .2s',
          '&:hover': {
            boxShadow: 2,
            transform: 'scale(1.05)'
          },
        }}
      >
        <Box
          sx={{
            lineHeight: 0,
            overflow: 'hidden',
            borderRadius: 1,
            minHeight: 200,
            mb: 2,
            pt: 4,
            pb: { xs: 8, md: 10 },
            height: { xs: '200px', md: '200px' },
            width: '100%',
            backgroundSize: 'cover',
            objectFit: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(${item.photo as string})`,
          }}
        >
         
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography component="h2" variant="h5" sx={{ fontSize: '1.3rem' }}>
            {item.name}
          </Typography>
          <Typography sx={{ mb: 2, color: 'text.secondary' }}>{item.address}</Typography>
          <Typography sx={{ mb: 2, color: 'text.secondary' }} variant="subtitle1">
            {item.description}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
export default DefaultCardItem

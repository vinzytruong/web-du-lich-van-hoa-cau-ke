import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Sites } from '@/interfaces/site'

interface Props {
  item: Sites
}

const PopularCardItem: FC<Props> = ({ item }) => {
  return (
    <Box
      sx={{
        px: 1.5,
        py: 5,
      }}
    >
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
            height: 200,
            mb: 2,
          }}
        >
          <Image src={item.photo as string} width={570} height={427} alt={'Mentor ' + item.id} />
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
export default PopularCardItem

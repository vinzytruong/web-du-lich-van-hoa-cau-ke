import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { data as dataSites } from '@/data/tourist-attraction.data'
import { data as dataProduct } from '@/data/ocop-product.data'

interface Exp {
  label: string
  value: string
}
interface ExpItemProps {
  item: Exp
}

const exps: Array<Exp> = [
  {
    label: 'Di tích lịch sử',
    value: (dataSites.filter(item => item.category.includes('di-tich')).length - 1) + "+",
  },
  {
    label: 'Địa điểm tham quan',
    value: (dataSites.filter(item => item.category.includes('dia-diem-du-lich')).length - 1) + "+",
  },
  {
    label: 'Sản phẩm OCOP',
    value: (dataProduct.length - 1) + "+",
  },
]

const ExpItem: FC<ExpItemProps> = ({ item }) => {
  const { value, label } = item
  return (
    <Box sx={{ textAlign: 'center', height: '160px' }} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
      <Box>
        <Typography
          sx={{ color: 'secondary.main', fontSize: { xs: 34, md: 44 }, fontWeight: 'bold' }}
        >
          {value}
        </Typography>
      </Box>
      <Box>
        <Typography color="text.secondary" variant="h5">
          {label}
        </Typography>
      </Box>
    </Box>
  )
}

const HomeHero: FC = () => {
  return (
    <Box id="hero" sx={{
      backgroundColor: 'background.paper',
      position: 'relative',
      pt: 4,
      pb: { xs: 8, md: 10 },
      height: { xs: '200px', md: '100vh' },
      width: '100%',
      backgroundSize: 'cover',
      objectFit: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('/images/cover/cover-home-1.jpg')`,
      borderRadius: 0
    }}>
      <Container maxWidth="lg" sx={{ mt: '90vh', display: { xs: 'none', md: 'block' } }}>
        <Box sx={{ bgcolor: 'background.paper', boxShadow: 2, borderRadius: 4 }}>
          <Grid container spacing={2}>
            {exps.map((item) => (
              <Grid key={item.value} item xs={12} md={4}>
                <ExpItem item={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeHero

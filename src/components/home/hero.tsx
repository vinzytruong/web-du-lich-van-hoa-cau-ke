import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
// import { data as dataSites } from '@/data/tourist-attraction.data'
import { data as dataProduct } from '@/data/ocop-product.data'
import useSites from '@/hooks/useSites'
import { Skeleton } from '@mui/material'
import useProduct from '@/hooks/useProduct'

interface Exp {
  label: string
  value: string
}
interface ExpItemProps {
  item: Exp
}

const ExpItem: FC<Exp> = ({ value, label }) => {


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
  const { dataSites, isLoaddingSites } = useSites()
  const { dataProduct, isLoadding } = useProduct()
  
  const numHitoricalSites = dataSites.sites.filter(item => item.category.includes('di-tich')).length - 1
  const numSiteSeeing = dataSites.sites.filter(item => item.category.includes('dia-diem-du-lich')).length - 1
  const numProduct = dataProduct.products.length - 1


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
            
              <Grid item xs={12} md={4}>

                <Box sx={{ textAlign: 'center', height: '160px' }} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                  <Box>
                    <Typography
                      sx={{ color: 'secondary.main', fontSize: { xs: 34, md: 44 }, fontWeight: 'bold' }}
                    >
                      {numHitoricalSites}+
                    </Typography>
                  </Box>
                  <Box>
                    <Typography color="text.secondary" variant="h5">
                      Di tích lịch sử
                    </Typography>
                  </Box>
                </Box>

              </Grid>

              <Grid item xs={12} md={4}>

                <Box sx={{ textAlign: 'center', height: '160px' }} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                  <Box>
                    <Typography
                      sx={{ color: 'secondary.main', fontSize: { xs: 34, md: 44 }, fontWeight: 'bold' }}
                    >
                      {numSiteSeeing}+
                    </Typography>
                  </Box>
                  <Box>
                    <Typography color="text.secondary" variant="h5">
                      Địa điểm du lịch
                    </Typography>
                  </Box>
                </Box>

              </Grid>

              <Grid item xs={12} md={4}>

                <Box sx={{ textAlign: 'center', height: '160px' }} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                  <Box>
                    <Typography
                      sx={{ color: 'secondary.main', fontSize: { xs: 34, md: 44 }, fontWeight: 'bold' }}
                    >
                      {numProduct}+
                    </Typography>
                  </Box>
                  <Box>
                    <Typography color="text.secondary" variant="h5">
                      Sản phẩm OCOP
                    </Typography>
                  </Box>
                </Box>

              </Grid>
           
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeHero

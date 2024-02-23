import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { FooterNavigation, FooterSocialLinks } from '@/components/footer'

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: 'primary.main', py: { xs: 6, md: 10 }, color: 'primary.contrastText' }}
    >
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} md={7}>
            <Box sx={{ width: { xs: '100%', md: 520 }, mb: { xs: 3, md: 0 } }}>
              <Typography textTransform='uppercase' component="h2" variant="h2" sx={{ mb: 2 }}>
                Du lịch văn hóa huyện Cầu Kè
              </Typography>
              <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 2 }}>
                Địa chỉ: Khóm 5, thị trấn Cầu Kè, Huyện Cầu Kè, Trà Vinh<br />
                Điện thoại: 0294.3834 077<br />
                Email: huyendoancauketv@gmail.com<br />
              </Typography>
              <FooterSocialLinks />
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <FooterNavigation />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer

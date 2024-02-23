import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

export const data = [
  {
    title: 'Cảnh đẹp',
    description: 'Một nơi tuyệt vời để thư giãn, và có thể tìm thấy sự yên bình khi hòa mình vào tự nhiên.',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Giá cả hợp lý',
    description: 'Một lựa chọn tốt cho những ai tìm kiếm một chuyến đi tiết kiệm mà vẫn đảm bảo chất lượng.',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Không khí trong lành',
    description: 'Hãy thưởng thức mỗi hơi thở trong không gian trong lành, và cảm nhận sự kết nối mạnh mẽ giữa con người và tự nhiên.',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Người dân thân thiện',
    description: 'Sự nồng hậu và thân thiện của người dân làm cho mỗi chuyến đi của bạn trở nên ấm áp và đáng nhớ hơn bao giờ hết.',
    icon: <ContactSupportIcon />,
  },
]

const HomeFeature: FC = () => {
  return (
    <Box id="feature" sx={{ py: { xs: 10, md: 14 }, backgroundColor: 'background.default' }}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box sx={{
              width: '100%',
              backgroundImage: `url('/images/noi-bat/chua-o-mich-9.jpg')`,
              backgroundSize: 'cover',
              objectFit: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              pt: 4,
              pb: { xs: 8, md: 10 },
              height: { xs: '200px', md: '400px' },
              borderRadius: 1
            }}>
              {/* <img style={{ borderRadius: 4, objectFit:'contain' }} src="" alt="Feature img" /> */}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              component="h3"
              sx={{
                position: 'relative',
                fontSize: { xs: 40, md: 50 },
                ml: { xs: 0, md: 4 },
                mt: 2,
                mb: 3,
                lineHeight: 1,
                fontWeight: 'bold',
              }}
            >
              Du lịch{' '}
              <Typography
                component="mark"
                sx={{
                  position: 'relative',
                  color: 'primary.main',
                  fontSize: 'inherit',
                  fontWeight: 'inherit',
                  backgroundColor: 'unset',
                }}
              >
                Cầu Kè <br />
                <Box
                  sx={{
                    position: 'absolute',
                    top: { xs: 20, md: 28 },
                    transform: 'rotate(3deg)',
                    left: 2,
                    '& img': { width: { xs: 140, md: 175 }, height: 'auto' },
                  }}
                >
                  <img src="/images/headline-curve.svg" alt="Headline curve" />
                </Box>
              </Typography>
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 2, ml: { xs: 0, md: 4 } }}>
              Huyện Cầu Kè nằm ở phía tây của tỉnh Trà Vinh, thuộc vùng Đồng bằng sông Cửu Long với cảnh quan thiên nhiên đẹp mắt rất thích hợp để phát triển du lịch.
            </Typography>
            <Grid container sx={{ ml: { xs: 0, md: 2 } }}>
              {data.map(({ title, description, icon }, index) => (
                <Grid key={String(index)} item xs={12} md={6}>
                  <Box sx={{ px: 2, py: 1.5, boxShadow: 1, borderRadius: 4, display: 'flex', alignItems: 'center' }}>
                    <Box
                      sx={{
                        mr: 1,
                        backgroundColor: 'primary.main',
                        borderRadius: '50%',
                        height: 36,
                        width: 36,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'primary.contrastText',
                        '& svg': {
                          fontSize: 20,
                        },
                      }}
                    >
                      {icon}
                    </Box>
                    <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                      <Typography variant="h6" sx={{ fontSize: '1rem', mb: 1, color: 'secondary.main' }}>
                        {title}
                      </Typography>
                      <Typography sx={{ lineHeight: 1.3, color: 'text.secondary' }} variant="subtitle1">
                        {description}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeFeature

import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Slider, { Settings } from 'react-slick'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme, styled } from '@mui/material/styles'
import IconArrowBack from '@mui/icons-material/ArrowBack'
import IconArrowForward from '@mui/icons-material/ArrowForward'
import { PopularCardItem } from '../card'
import useSites from '@/hooks/useSites'
import { Skeleton } from '@mui/material'


interface SliderArrowArrow {
  onClick?: () => void
  type: 'next' | 'prev'
  className?: 'string'
}

const SliderArrow: FC<SliderArrowArrow> = (props) => {
  const { onClick, type, className } = props
  return (
    <IconButton
      sx={{
        backgroundColor: 'background.paper',
        color: 'primary.main',
        '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' },
        bottom: '-28px !important',
        left: 'unset !important',
        right: type === 'prev' ? '60px !important' : '0 !important',
        zIndex: 10,
        boxShadow: 1,
      }}
      disableRipple
      color="inherit"
      onClick={onClick}
      className={className}
    >
      {type === 'next' ? <IconArrowForward sx={{ fontSize: 22 }} /> : <IconArrowBack sx={{ fontSize: 22 }} />}
    </IconButton>
  )
}

const StyledDots = styled('ul')(({ theme }) => ({
  '&.slick-dots': {
    position: 'absolute',
    left: 0,
    bottom: -20,
    paddingLeft: theme.spacing(1),
    textAlign: 'left',
    '& li': {
      marginRight: theme.spacing(2),
      '&.slick-active>div': {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
}))

const HomeOurMentors: FC = () => {
  const { breakpoints } = useTheme()
  const matchMobileView = useMediaQuery(breakpoints.down('md'))

  const sliderConfig: Settings = {
    infinite: true,
    autoplay: true,
    speed: 200,
    slidesToShow: matchMobileView ? 1 : 3,
    slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
    dots: true,
    appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
    customPaging: () => (
      <Box sx={{ height: 8, width: 30, backgroundColor: 'divider', display: 'inline-block', borderRadius: 4 }} />
    ),
  }
  const { dataSites, isLoaddingSites } = useSites()
  const dataShow = dataSites.sites.filter(item => item.isPopular === true)
  return (
    <Box
      id="mentors"
      sx={{
        pt: {
          xs: 18,
          md: 24,
        },
        pb: {
          xs: 8,
          md: 12,
        },
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <Typography textAlign='center' color='primary.main' py={2} variant="h1" sx={{ fontSize: 40 }}>
          Địa điểm nổi bật
        </Typography>
        <Typography variant="body1" textAlign='center'>
          Xin chào và chào mừng quý vị đến với huyện Cầu Kè - một điểm đến tuyệt vời cho những ai yêu thích khám phá và khám phá lịch sử và văn hóa của Việt Nam. Các bạn hãy cùng chúng tôi bắt đầu cuộc hành trình đầy thú vị qua những điểm đến đặc biệt dưới đây
        </Typography>
        <Slider {...sliderConfig}>
          {
            isLoaddingSites ?
              <Skeleton height='400px' />
              :
              dataShow.map((item) => (
                <PopularCardItem key={String(item.id)} item={item} />
              ))
          }
        </Slider>
      </Container>
    </Box>
  )
}

export default HomeOurMentors

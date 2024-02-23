import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { data } from '../../data/tourist-attraction.data'
import { Button, Grid } from '@mui/material'
import { DefaultCardItem } from '../card'

const HomeSightSeeingSites: FC = () => {
    const [showMore, setShowMore] = React.useState(false);
    const dataFilter = data.filter(item => item.category === 'dia-diem-du-lich')
    const dataShow = showMore ? dataFilter : dataFilter.slice(0, 3)
    return (
        <Box
            id="mentors"
            sx={{
                pt: {
                    xs: 8,
                    md: 12,
                },
                pb: {
                    xs: 8,
                    md: 12,
                },
                backgroundColor: 'background.default',
            }}
        >
            <Container maxWidth="lg">
                <Typography textAlign='center' color='primary.main' py={2} variant="h1" sx={{ fontSize: 40 }}>
                    Địa điểm du lịch
                </Typography>
                <Typography variant="body1" textAlign='center'>
                    Bạn đã bao giờ mong muốn được khám phá những bí mật và vẻ đẹp của một nơi mới, đầy hấp dẫn và lôi cuốn chưa? Hãy để chúng tôi dẫn bạn vào một hành trình khám phá tuyệt vời tại huyện Cầu Kè - một điểm đến không thể bỏ qua cho những ai yêu thích du lịch và khám phá
                </Typography>
                <Grid container spacing={3} sx={{ px: 1.5, py: 5 }}>
                    {dataShow.map((item, index) => (
                        <Grid item md={4} key={index}>
                            <DefaultCardItem key={String(item.id)} item={item} />
                        </Grid>
                    ))}
                </Grid>
                {dataFilter.length > 3 ?
                    <Box pt={5} alignItems='center' justifyContent='center' textAlign='center'>
                        <Button variant='outlined' onClick={() => setShowMore(!showMore)}>{showMore ? "Rút gọn" : "Xem thêm"}</Button>
                    </Box>
                    : null
                }
            </Container>
        </Box>
    )
}
export default HomeSightSeeingSites;
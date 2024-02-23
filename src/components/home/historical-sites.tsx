import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { data } from '../../data/tourist-attraction.data'
import { Button, Grid } from '@mui/material'
import { DefaultCardItem } from '../card'
import Link from 'next/link'
import SitesTab from '../tabs'

const HomeHistorySites: FC = () => {
    const [showMore, setShowMore] = React.useState(false);
    const dataFilter = data.filter(item => item.category === 'di-tich-lich-su')
    const dataShow = showMore ? dataFilter : dataFilter.slice(0, 3)
    return (
        // <Link href='#'>
        <Box
            id="mentors"
            sx={{
                pt: {
                    xs: 8,
                    md: 12,

                },
                pb: {
                    xs: 8,
                    md: 6,
                },
                backgroundColor: 'background.paper',
            }}
        >
            <Container maxWidth="lg">
                <Typography textAlign='center' color='primary.main' py={2} variant="h1" sx={{ fontSize: 40 }}>
                    Di tích lịch sử
                </Typography>
                <Typography variant="body1" textAlign='center'>
                    Dạo bước qua những con đường lịch sử, lắng nghe những câu chuyện kể về những dấu ấn của quá khứ, và thưởng ngoạn vẻ đẹp của những công trình kiến trúc độc đáo - hãy để huyện Cầu Kè là điểm đến tiếp theo của quý vị trên bản đồ du lịch lịch sử của Việt Nam. Hãy cùng nhau tạo nên những kỷ niệm không thể quên và những trải nghiệm tuyệt vời tại huyện Cầu Kè, nơi lịch sử còn mãi sống đọng trong từng dấu tích và từng cánh cửa mở ra với quý khách.
                </Typography>
                <Grid container spacing={3} sx={{ px: 0, py: 5 }}>
                    <SitesTab />
                </Grid>
                {dataFilter.length > 3 ?
                    <Box pt={5} alignItems='center' justifyContent='center' textAlign='center'>
                        <Button variant='outlined' onClick={() => setShowMore(!showMore)}>{showMore ? "Rút gọn" : "Xem thêm"}</Button>
                    </Box>
                    : null
                }

            </Container>
        </Box>
        // </Link>

    )
}
export default HomeHistorySites;
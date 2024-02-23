import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { data } from '../../data/tourist-attraction.data'
import { Grid, Skeleton } from '@mui/material'
import CustomizedTables from '../table/table-ocop-product'
import TableProduct from '../table/table-product'
import useSites from '@/hooks/useSites'
import useProduct from '@/hooks/useProduct'

const HomeOCOP: FC = () => {
    const [showMore, setShowMore] = React.useState(false);
    const dataFilter = data.filter(item => item.category === 'dia-diem-du-lich')
    const dataShow = showMore ? dataFilter : dataFilter.slice(0, 3)
    const { dataProduct, isLoadding } = useProduct()

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
                backgroundColor: 'background.paper',
            }}
        >
            <Container maxWidth="lg">
                <Typography textAlign='center' color='primary.main' py={2} variant="h1" sx={{ fontSize: 40 }}>
                    Sản phẩm OCOP
                </Typography>
                <Typography variant="body1" textAlign='center'>
                    Sản phẩm OCOP là sản phẩm tham gia vào Chương trình OCOP Quốc gia. Theo Quyết định 919/QĐ-TTg thì sản phẩm OCOP là những sản phẩm hàng hóa và dịch vụ du lịch có nguồn gốc địa phương, có thương hiệu, mang đặc trưng về văn hóa, lợi thế của địa phương. Dưới đây là những sản phẩm OCOP của huyện Cầu Kè
                </Typography>
                <Grid container spacing={3} sx={{ px: 0, py: 5 }}>
                    <Grid item md={12}>
                        {isLoadding ?
                            <Skeleton height='200px' />
                            :
                            <TableProduct data={dataProduct.products} isAdmin={false} />
                        }
                    </Grid>
                </Grid>

            </Container>
        </Box>
    )
}
export default HomeOCOP;
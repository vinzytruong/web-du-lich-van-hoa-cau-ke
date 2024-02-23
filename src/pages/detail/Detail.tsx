import { MainLayout } from "@/components/layout"
import AlignItemsList from "@/components/list"
import useSites from "@/hooks/useSites"
import { Box, Grid } from "@mui/material"


const DetailPage = (id: any) => {
    const text = '<p><strong>Welcome to TinyMCE!</strong></p>'
    const { getSite } = useSites()
    const dataFilter = getSite(id.id)
    const textHtml = dataFilter?.detail ? dataFilter.detail : text

    return (
        <MainLayout>
            <Grid container minHeight='100vh' style={{ margin: 0, padding: 0 }} sx={{ m: 0, p: 0, background: '#fff' }}>
                <Grid item sm={12} md={9}>
                    <Box px={3} py={2}>
                        <div dangerouslySetInnerHTML={{ __html: textHtml }} />
                    </Box>
                </Grid>
                <Grid item sm={12} md={3}>
                    <AlignItemsList />
                </Grid>
            </Grid>
        </MainLayout>
    )
}
export default DetailPage
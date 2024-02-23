import { MainLayout } from "@/components/layout"
import { StyledButton } from "@/components/styled-button"
import useSites from "@/hooks/useSites"
import { auth } from "@/services/firebaseConfig"
import { Box, Grid, OutlinedInput, Skeleton, Typography } from "@mui/material"
import { Editor } from "@tinymce/tinymce-react"
import { onAuthStateChanged } from "firebase/auth"
import { useRouter } from "next/router"
import { useRef } from "react"

const EditPage = (id: any) => {
    const text = '<p>Nhập nội dung</p>'
    const router = useRouter()
    const { dataSites, getSite, updateDocument, isLoaddingSites } = useSites()
    const dataSiteById = getSite(id.id)
    const textHtml = dataSiteById ? dataSiteById.detail : text
    const editorRef = useRef<any>(null);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
        } else {
            router.push('/login')
        }
    });
    
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };

    return (
        <MainLayout>
            <Grid container minHeight='100vh' style={{ margin: 0, padding: 0 }} sx={{ m: 0, p: 0, background: '#fff' }}>
                <Grid item sm={12} md={3}>
                    <Box px={3} py={2} display='flex' flexDirection='column' gap={3}>
                        <Typography variant="h5" py={2}>Thông tin địa điểm</Typography>
                        {
                            isLoaddingSites ?
                                <>
                                    <Skeleton height='80px' />
                                    <Skeleton height='80px' />
                                    <Skeleton height='80px' />

                                </>

                                :
                                <>
                                    <OutlinedInput
                                        defaultValue={dataSiteById?.name}
                                        placeholder={dataSiteById?.name}
                                        fullWidth

                                    />
                                    <OutlinedInput
                                        defaultValue={dataSiteById?.category}
                                        placeholder={dataSiteById?.category}
                                        fullWidth

                                    />
                                    <OutlinedInput
                                        defaultValue={dataSiteById?.address}
                                        placeholder={dataSiteById?.address}
                                        fullWidth

                                    />

                                </>

                        }




                        <StyledButton onClick={() => updateDocument(dataSiteById?.idDoc, editorRef.current.getContent())}>Lưu</StyledButton>
                    </Box>
                </Grid>
                <Grid item sm={12} md={9}>
                    <Box px={3} py={2}>
                        <Typography variant="h5" py={2}>Nội dung bài viết</Typography>
                        <Editor
                            apiKey='14k1a86ufd246udb1673eomw5rkgqyc34jnjlur83wlivciz'
                            onInit={(evt, editor: any) => editorRef.current = editor}
                            initialValue={textHtml}
                            init={{
                                height: 800,
                                menubar: false,
                                plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
                                toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                                tinycomments_mode: 'embedded',
                                tinycomments_author: 'Author name',
                                ai_request: (request: any, respondWith: any) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                            }}
                        />
                        {/* <button onClick={log}>Log editor content</button> */}
                    </Box>
                </Grid>

            </Grid>
        </MainLayout>
    )
}
export default EditPage
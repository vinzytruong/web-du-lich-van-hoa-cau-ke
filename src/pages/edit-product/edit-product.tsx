import { MainLayout } from "@/components/layout"
import AlignItemsList from "@/components/list"
import { auth } from "@/services/firebaseConfig"
import { fetchDataProduct } from "@/services/utils"
import { Box, Container, Grid } from "@mui/material"
import { Editor } from "@tinymce/tinymce-react"
import { onAuthStateChanged } from "firebase/auth"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
const text = '<p><strong>Welcome to TinyMCE!</strong></p>'
const EditPage = (id: any) => {
    const [value, setValue] = useState('<p>The quick brown fox jumps over the lazy dog</p>');
    const [text, setText] = useState('');
    const [textFromFirebase, setTextFromFirebase] = useState('');
    const router = useRouter()
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
        } else {
            router.push('/login')
        }
    });



    return (
        <MainLayout>
            <Grid container minHeight='100vh' style={{ margin: 0, padding: 0 }} sx={{ m: 0, p: 0, background: '#fff' }}>
                <Grid item sm={12} md={12}>
                    <Box px={3} py={2}>
                        <div dangerouslySetInnerHTML={{ __html: text }} />
                    </Box>
                </Grid>
                <Grid item sm={12} md={12}>
                    <Editor
                        apiKey='14k1a86ufd246udb1673eomw5rkgqyc34jnjlur83wlivciz'
                        init={{
                            plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
                            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                            tinycomments_mode: 'embedded',
                            tinycomments_author: 'Author name',
                            mergetags_list: [
                                { value: 'First.Name', title: 'First Name' },
                                { value: 'Email', title: 'Email' },
                            ],
                            ai_request: (request: any, respondWith: any) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                        }}
                        initialValue="Welcome to TinyMCE!"
                        value={value}
                        onInit={(evt, editor) => {
                            setText(editor.getContent({ format: 'html' }));
                        }}
                        onEditorChange={(newValue, editor) => {
                            setValue(newValue);
                            setText(editor.getContent({ format: 'html' }));
                        }}
                    />
                </Grid>
            </Grid>



        </MainLayout>
    )
}
export default EditPage
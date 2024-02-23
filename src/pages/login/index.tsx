import { useRouter } from "next/router";
import { fetchData, signInWithGooglePopup } from "../../services/utils";
import { Box, Button, OutlinedInput } from "@mui/material";
import { StyledButton } from "@/components/styled-button";

const SignIn = () => {
    const router = useRouter()
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        if (response.uid) router.push('/admin')
    }
    return (
        <Box
            onClick={logGoogleUser}
            display='flex'
            justifyContent="center"
            alignItems='center'
            width='100vw'
            height='100vh'
        >
            <StyledButton size="large" startIcon={<img src='https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png' width={20} height={20} />}>
                Đăng nhập với Google
            </StyledButton>
        </Box>

    )
}
export default SignIn;
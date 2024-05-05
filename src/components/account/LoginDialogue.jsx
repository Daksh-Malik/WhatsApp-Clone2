import { Dialog, Box, Typography, List, ListItem, styled} from '@mui/material'
import React from 'react'
import { qrCodeImage } from '../../assets/assets'
import {GoogleLogin} from '@react-oauth/google'
import {jwtDecode} from "jwt-decode";

const Component = styled(Box)`
    display: flex;
`
const Container = styled(Box)`
    padding: 56px 0 56px 56px;
`
const QRCode = styled('img')({
    height: '264px',
    width: '264px',
    margin: '50px 0 0 50px'
})

const Title = styled(Typography)`
    font-size: 26px;
    margin-bottom: 25px;
    color: #525252;
    font-family: Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif;
    font-weight: 300;
`

const StyledList = styled(List)`
    &  > li {
        padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px;
        color: #4a4a4a;
    }
`

const style = {
    height: '96%',
    marginTop: '12%',
    width: '60%',
    maxWidth: '100%',
    maxheight: '100%',
    boxShadow: 'none',
    overflow: 'none'
}

export default function LoginDialogue() {

    const onLoginSuccess = (res)=> {
        const decoded = jwtDecode(res.credential);
        console.log(decoded);
    }

    const onLoginError = (res)=> {
        console.log("Login Error",res)
    }

    return (
        <>
        <Dialog open={true} PaperProps={{sx:style}}>
            <Component>
                <Container>
                    <Title>To use WhatsApp on your computer</Title>
                    <StyledList>
                        <ListItem>1. Open WhatsApp on your phone</ListItem>
                        <ListItem>2. Tap menu on Android, or Settings on iPhone</ListItem>
                        <ListItem>3. Tap Linked devices and then Link a device</ListItem>
                        <ListItem>4. Point your phone at this screen to capture the QR code</ListItem>
                    </StyledList>
                </Container>
                <Box style={{position:'relative'}}>
                    <QRCode src={qrCodeImage} alt="QR CODE" />
                    <Box style={{position:'absolute', top:'45%', left:'30%'}}>
                        <GoogleLogin 
                            onSuccess={onLoginSuccess}
                            onError={onLoginError}
                        />
                    </Box>
                </Box>
            </Component>
        </Dialog>
        </>
    )
}

import React from 'react'
import tw from "tailwind-styled-components"
import { FcGoogle } from 'react-icons/fc'

const Login = () => {
    return (
        <Wrapper>
            <Title>
                Want to have paid course exprience from your YouTube Tutorials?
            </Title>
            <LoginButton>
                <ButtonText>Login / Signup with</ButtonText>
                <GIcon>
                    <FcGoogle />
                </GIcon>
            </LoginButton>
        </Wrapper>
    )
}

export default Login;

const Wrapper = tw.div`
    w-screen flex flex-col items-center mt-40
`

const Title = tw.div`
    text-xl mb-5
`

const LoginButton = tw.div`
   flex items-center justify-center border py-2 px-4 bg-black rounded-xl cursor-pointer 
`
const ButtonText = tw.div`
    mr-1 text-xl text-white
`
const GIcon = tw.div`
    text-3xl
`
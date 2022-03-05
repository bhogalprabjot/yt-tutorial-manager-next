import React from 'react'
import tw from "tailwind-styled-components"

const Login = () => {
  return (
    <Wrapper>
        <Title>
            Want to have paid course exprience from your YouTube Tutorials? 
        </Title>
        <SubTitle>Login / Signup with Google</SubTitle>
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

const SubTitle = tw.div`
    text-xl border py-2 px-4 text-white bg-black rounded-xl cursor-pointer
`
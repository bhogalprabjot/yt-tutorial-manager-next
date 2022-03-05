import React from 'react'
import tw from "tailwind-styled-components"

const FooterComp = () => {
  return (
    <Wrapper>2022 - bhogalprabjot1@gmail.com</Wrapper>
  )
}

export default FooterComp;

const Wrapper = tw.div`
    text-center p-2 bg-black text-white
`
import React from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'
import { AiFillYoutube } from 'react-icons/ai/index'
const NavBar = () => {
    return (
        <Wrapper>
            <Logo>
                <Link href='/'>
                    {/* <TitleText>YouTube Learning</TitleText> */}
                    <TitleText><TitleIcon><AiFillYoutube /></TitleIcon> Learning</TitleText>
                </Link>
            </Logo>
            {/* TODO: Add conditional rendering here after setup of firebase auth */}
            <NavMenu>
                <Link href='/my-learning'>
                    <NavItem>My Learning</NavItem>
                </Link>
                {/* TODO think another name for MyStats */}
                <NavItem>My Stats</NavItem>
                <NavItem>Contact Us</NavItem>
            </NavMenu>
        </Wrapper>
    )
}

export default NavBar;

const Wrapper = tw.div`
    p-4 bg-black-light text-white flex justify-between items-center 
`
const Logo = tw.div`
    ml-4
`
const NavMenu = tw.div`
    flex items-center 
`
const NavItem = tw.div`
    mr-8 cursor-pointer tracking-wider
`
const Text = tw.div`
    text-3xl 
`
const TitleText = tw.div`
    text-3xl text-red flex items-center cursor-pointer tracking-tighter 
`
const TitleIcon = tw.div`
    text-5xl text-red flex items-center mr-1
`
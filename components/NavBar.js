import React from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'
const NavBar = () => {
    return (
        <Wrapper>
            <Logo>
                <Link href='/'>
                    <TitleText>YouTube Learning</TitleText>
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
    p-4 bg-black-light text-white flex justify-between items-center tracking-wider
`
const Logo = tw.div`
    ml-4
`
const NavMenu = tw.div`
    flex items-center 
`
const NavItem = tw.div`
    mr-8 cursor-pointer
`
const Text = tw.div`
    text-3xl
`
const TitleText = tw.div`
    text-3xl text-red
`
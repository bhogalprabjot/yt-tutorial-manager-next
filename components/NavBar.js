import React from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'
const NavBar = () => {
    return (
        <Wrapper>
            <Logo>
                <Link href='/'>
                    YT Tutorial Manager
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
    p-2 bg-black text-white flex justify-between
`
const Logo = tw.div`
    ml-2
`
const NavMenu = tw.div`
    flex
`
const NavItem = tw.div`
    mr-3 cursor-pointer
`
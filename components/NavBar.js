import React from 'react'
import tw from "tailwind-styled-components"

const NavBar = () => {
  return (
    <Wrapper>
        <Logo>
            YT Tutorial Manager
        </Logo>
        <NavMenu>
            <NavItem>My Tutorials</NavItem>
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
    mr-3
`
import React from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'
import { AiFillYoutube } from 'react-icons/ai/index'
import { GiHamburgerMenu } from 'react-icons/gi'
const NavBar = () => {
    return (
        <Wrapper>
            <LeftSide>

                <MobileMenu>
                    <GiHamburgerMenu />
                </MobileMenu>
                <Logo>
                    <Link href='/' passHref>
                        {/* <TitleText>YouTube Learning</TitleText> */}
                        <TitleText><TitleIcon><AiFillYoutube /></TitleIcon> Learning</TitleText>
                    </Link>
                </Logo>
            </LeftSide>
            {/* TODO: Add conditional rendering here after setup of firebase auth */}
            <NavMenu>
                <NavItems>

                    <Link href='/my-learning' passHref>
                        <NavItem>My Learning</NavItem>
                    </Link>
                    {/* TODO think another name for MyStats */}
                    <NavItem>My Stats</NavItem>
                    <NavItem>Contact Us</NavItem>
                    <NavItem>
                    </NavItem>

                </NavItems>
                <UserAvatar src='tutorial.jpg' />
            </NavMenu>
        </Wrapper>
    )
}

export default NavBar;



const Wrapper = tw.div`
    p-4 bg-black-light text-white flex justify-between items-center    
`
const LeftSide = tw.div`
    flex items-center 
`
const MobileMenu = tw.div`
    md:hidden
`
const Logo = tw.div`
    ml-4
`
const NavMenu = tw.div`
    flex items-center 
`
const NavItems = tw.div`
    flex items-center hidden md:flex
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
const UserAvatar = tw.img`
    object-cover h-12 w-12 rounded-full
` 
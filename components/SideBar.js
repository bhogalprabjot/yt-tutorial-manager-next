import React from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link';
const SideBar = ({handleToggleSidebar}) => {
  console.log("This is sidebar")
  return (
    <Wrapper>
      <NavMenu>
        <NavItems>

          <Link href='/my-learning' passHref>
            <NavItem onClick={handleToggleSidebar}> My Learning</NavItem>
          </Link>
          <NavItem onClick={handleToggleSidebar}>My Stats</NavItem>
          <NavItem onClick={handleToggleSidebar}>Contact Us</NavItem>
          <NavItem>
          </NavItem>

        </NavItems>
      </NavMenu>

    </Wrapper>
  )
}

export default SideBar;

const Wrapper = tw.div`
  h-5/6
`;

const NavMenu = tw.div`
    flex-col items-center
`
const NavItems = tw.div`
    flex-col items-center  
`
const NavItem = tw.div`
    m-10 text-xl cursor-pointer tracking-wider
`
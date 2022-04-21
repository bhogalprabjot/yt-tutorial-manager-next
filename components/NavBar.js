import React, { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'
import { AiFillYoutube } from 'react-icons/ai/index'
import { GiHamburgerMenu } from 'react-icons/gi'
import SideBar from './SideBar'
import { useSelector, useDispatch } from 'react-redux'
import { setSignOut, selectUserPhoto, selectUserName } from '../redux/userSlice'
import { useRouter } from 'next/router'
import { auth, provider } from "../Firebase";


const NavBar = ({ handleToggleSidebar }) => {
    const dispatch = useDispatch();
    // const userPhoto = useSelector(selectUserPhoto);
    const router = useRouter();
    const [userName, setUserName] = useState(null);
    const [userPhoto, setUserPhoto] = useState(null);
    // const userName = useSelector(selectUserName);
    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUserName(user.displayName);
                setUserPhoto(user.photoURL);
            }
        })
    }, [])

    const signOut = () => {
        auth.signOut()
            .then(() => {
                dispatch(setSignOut());
                setUserName(null);
                router.push('/');
            })
    }

    return (
        <Wrapper>

            <LeftSide>
                <MobileMenu>
                    <GiHamburgerMenu size={25} onClick={handleToggleSidebar} />
                </MobileMenu>
                <Logo>
                    <Link href='/home' passHref>
                        {/* <TitleText>YouTube Learning</TitleText> */}
                        <TitleText><TitleIcon><AiFillYoutube /></TitleIcon> Learning</TitleText>
                    </Link>
                </Logo>




            </LeftSide>
            {/* TODO: Add conditional rendering here after setup of firebase auth */}
            {userName &&
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
                    <UserAvatar src={userPhoto} onClick={signOut} />
                </NavMenu>
            }
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
    mr-6 cursor-pointer tracking-wider
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
    object-cover h-12 w-12 rounded-full cursor-pointer
` 
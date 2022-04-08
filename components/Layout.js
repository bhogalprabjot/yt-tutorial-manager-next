import React from 'react'
import tw from "tailwind-styled-components"
import FooterComp from './FooterComp';
import NavBar from './NavBar';

const Layout = ({ children }) => {
    return (
        <>
            <head>
                <title>YT Tutorial Manager</title>
            </head>
            <LayoutWrapper>
                {/* <header>
                    <NavBar />
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <Footer />
                </footer> */}
                <Header>
                    <NavBar />
                </Header>
                <Main>
                    {children}
                </Main>
                {/* <Footer ><FooterComp /></Footer> */}
            </LayoutWrapper>
        </>

    )
}

export default Layout;

const LayoutWrapper = tw.div`
    h-screen  w-screen flex flex-col overflow-x-hidden scrollbar scrollbar-thumb-black-light
 `

const Header = tw.header`
 `

const Main = tw.main`
    flex flex-1 
`
const Footer = tw.footer`
`
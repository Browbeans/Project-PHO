import React, { CSSProperties } from 'react'; 
import FooterContent from './FooterContent';
import MainContent from './MainContent';
import NavBar from './NavBar'

function Layout() {
    return(
    <div style={rootStyle}>
        <NavBar/>
        <MainContent/>
        <FooterContent/>
    </div>

    ) 
}

const rootStyle: CSSProperties = {
    height: '100vh', 
    background:'gray'
}

export default Layout; 
import React, { CSSProperties } from 'react'; 
import MainContent from './MainContent';
import NavBar from './NavBar'

function Layout() {
    return(
    <div style={rootStyle}>
        <NavBar/>
        <MainContent/>
    </div>

    ) 
}

const rootStyle: CSSProperties = {
  height: "100vh",
  background: "#f3cf7a",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  flex: 1,
};

export default Layout; 
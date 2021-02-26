import React, { CSSProperties } from 'react'; 
import MainContent from './MainContent';
import NavBar from './NavBar'

function Layout() {
    return (
      <div style={rootStyle}>
        <NavBar />
        <MainContent/>
      </div>
    ); 
}

const rootStyle: CSSProperties = {
  minHeight: "100vh",
  background: "#f3cf7a",
  display: "flex",
  flexDirection: "column",
  flex: 1,
};

export default Layout; 
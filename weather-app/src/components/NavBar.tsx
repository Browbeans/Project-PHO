import React, { CSSProperties } from 'react'; 

function NavBar() {
    return (
        <div style={rootStyle}>
            <h1 style={textStyle}>Götebärs</h1>
        </div>
    )
}

const rootStyle: CSSProperties = {
  width: "100%",
  height: '10rem',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const textStyle: CSSProperties = {
    color: 'white',
    fontSize: '3rem',
}

export default NavBar; 
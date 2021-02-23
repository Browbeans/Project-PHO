import React, { CSSProperties } from 'react'; 

function NavBar() {
    return (
        <div style={rootStyle}>
            <h1 style={textStyle}>Götebärs</h1>
        </div>
    )
}

const rootStyle: CSSProperties = {
    width: '100%', 
    height: '5rem',
    background: 'white', 
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
}
const textStyle: CSSProperties = {
    
}

export default NavBar; 
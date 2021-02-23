import React, { CSSProperties } from 'react'; 

function NavBar() {
    return (
        <div style={rootStyle}>
            <h1>Götebärs</h1>
        </div>
    )
}

const rootStyle: CSSProperties = {
    width: '100%', 
    background: 'white', 
    display: 'flex', 
    justifyContent: 'center'
}

export default NavBar; 
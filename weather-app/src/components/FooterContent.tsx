import React, { CSSProperties } from 'react'; 

function FooterContent() {
    return(
        <div style={rootStyle}>
            <h2>Footer</h2>
        </div>
    )
}

const rootStyle: CSSProperties = {
    width: '100%', 
    position: 'fixed',
    bottom: 0, 
    background: 'white', 
    display: 'flex', 
    justifyContent: 'center'
}


export default FooterContent; 
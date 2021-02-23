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
    height: '5rem', 
    background: 'white', 
    display: 'flex', 
    justifyContent: 'center'
}


export default FooterContent; 
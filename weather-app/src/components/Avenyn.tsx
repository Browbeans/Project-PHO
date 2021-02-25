import React, { CSSProperties } from 'react'

const Avenyn = () => {
    return (
        <div>
           <main style={rootStyle}>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident quidem esse praesentium odit ipsum, excepturi quisquam deleniti blanditiis, dolor quibusdam possimus doloremque, cupiditate vero earum eveniet explicabo numquam vel quis.</p>
               </main> 
        </div>
    )
}

export default Avenyn


const rootStyle: CSSProperties = {
    background: 'blue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '90vh',
}
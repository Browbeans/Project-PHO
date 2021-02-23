import React, { CSSProperties } from 'react'; 


interface Props {
    image: string
    title: string
}

function BarItem(props: Props) {
    return(
        <div style={rootStyle}>
            <h2 style={textStyle}>{props.title}</h2>
            <img style={imgStyle} src={props.image} alt=""/>
        </div>
    )
} 

const rootStyle: CSSProperties = {
    width: '15rem',
    height: '15rem', 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    background: '#6e3b3b', 
    justifyContent: 'space-between', 
    borderRadius: '1rem', 
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', 
    overflow: 'hidden',
    padding: '1rem'
}

const textStyle: CSSProperties = {
    color: '#f3cf7a', 
    textShadow: '1px 1px .1px #ac3f21', 
    fontSize: '2rem'
}

const imgStyle: CSSProperties = {
    width: '100%',
    height: '9rem'
}

export default BarItem; 
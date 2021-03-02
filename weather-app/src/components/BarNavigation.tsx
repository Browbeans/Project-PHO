  
import React, { CSSProperties } from 'react'; 
import { Link, Route, Switch } from 'react-router-dom';
import BarItem from './BarItem';


interface Props {
  id: string
}

function BarNavigation(props: Props) {
    const imageSource = `../assets/${props.id}.jpg`;

    // const avenyBars = ['Yaki-Da', 'Lounge', 'Hard-Rock Cafe'];


    return(
            <Link to={props.id} style={{ textDecoration: 'none' }}>
                <div style={rootStyle}>
                    <h2 style={textStyle}>{props.id}</h2>
                    <img style={imgStyle} src={imageSource} alt=""/>
                </div>
            </Link>
    )
}

const rootStyle: CSSProperties = {
    width: '20rem',
    height: '20rem', 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    background: '#6e3b3b', 
    justifyContent: 'space-between', 
    borderRadius: '1rem', 
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', 
    overflow: 'hidden',
    padding: '1rem', 
    margin: '1rem'
}

const textStyle: CSSProperties = {
    color: '#f3cf7a', 
    textShadow: '1px 1px .1px #ac3f21', 
    fontSize: '1.8rem',
}

const imgStyle: CSSProperties = {
    width: '100%',
    height: '13.3rem'
}

export default BarNavigation; 
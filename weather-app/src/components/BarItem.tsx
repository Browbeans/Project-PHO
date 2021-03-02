import React, { CSSProperties } from 'react';
import Map from './Map'
interface Props {
    bar: {
        title: string 
        image: string
        info: string
        lat: number
        lng: number
    }
}


export default function BarItem(props: Props) {
    return (
        <div style={styleContainer}>
            <div>
                <h2>{props.bar.title}</h2>
            </div>
            <div style={flexRow}>
                <div style={textContainer}>
                    <p>{props.bar.info}</p>
                </div>
                <div style={rightContainer}>
                    <div style={imageStyle}>

                    </div>
                    <div style={mapStyle}>
                        <Map bar={props.bar}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

const styleContainer: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    margin: 'auto',
    flexDirection: 'column',
}

const imageStyle: CSSProperties = {
    width: '15rem',
    height: '15rem',
    background: 'blue',
    marginBottom: '2rem'
}

const mapStyle: CSSProperties = {
    width: '15rem',
    height: '15rem',
    marginBottom: '2rem'
}

const rightContainer: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'

}

const flexRow: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    flexWrap: 'wrap',
    marginTop: '2rem'
}

const textContainer: CSSProperties = {
    width: '20rem',
    marginBottom: '2rem'
}
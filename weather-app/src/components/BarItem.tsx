import React, { CSSProperties } from 'react';

interface Props {
    bar: {
        title: string, 
        image: string, 
        info: string
    }
}


export default function BarItem(props: Props) {
    return (
        <div style={styleContainer}>
            <h1>{props.bar.title}</h1>
            {/* <p>test</p> */}
        </div>
    );
}

const styleContainer: CSSProperties = {
    display: 'flex',
    background: 'red'
}
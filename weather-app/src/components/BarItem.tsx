import React, { CSSProperties } from 'react';

interface Props {
    id: string
}

export default function BarItem(props: Props) {
    return (
        <div style={styleContainer}>
            <p>{props.id}</p>
            {/* <p>test</p> */}
        </div>
    );
}

const styleContainer: CSSProperties = {
    display: 'flex',
    background: 'red'
}
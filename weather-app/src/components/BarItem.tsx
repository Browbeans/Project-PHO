import React, { CSSProperties } from 'react';

interface Props {
    id: string
}

export default function BarItem(props: Props) {
    return (
        <div style={styleContainer}>
            <div>
                <h3>{props.id}</h3>
            </div>
            <div style={flexRow}>
                <div style={textContainer}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia eligendi minima reprehenderit est vel quidem quisquam totam dolor similique odio architecto impedit molestiae et cupiditate quaerat rem sunt vero, maxime iusto tempora saepe velit quos consequuntur itaque! Asperiores, aliquam! Aliquid!</p>
                </div>
                <div style={rightContainer}>
                    <div style={imageStyle}>

                    </div>
                    <div style={mapStyle}>

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
    background: 'red'
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
    width: '80%',
    flexWrap: 'wrap'
}

const textContainer: CSSProperties = {
    width: '20rem',
    margin: '2rem auto'
}
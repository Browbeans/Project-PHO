import React, { CSSProperties } from 'react'; 
import ContentItem from './ContentItem';

function MainContent() {
    return(
        <div style={rootStyle}>
            <ContentItem />
        </div>
    )
}

const rootStyle: CSSProperties ={
    height: '93vh', 
    background: 'red'
}


export default MainContent; 
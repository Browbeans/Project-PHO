import React, { CSSProperties } from 'react'; 
import { displayPartsToString } from 'typescript';
import ContentItem from './ContentItem';

const imageS =
  "https://www.avenyn.se/wp-content/uploads/2016/11/avenyvandring700x350.jpg";


interface Props{
    
}

const MainContent: React.FC<Props> = ()  => {
    return(
        <div style={rootStyle}>
            <ContentItem title="Avenyn" image={imageS}/>
            <ContentItem title="Andra Lång" image={imageS}/>
            <ContentItem title="Hisingen" image={imageS}/>
        </div>
    )
}

const rootStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  height: '90rem',
  justifyContent: "space-around",
  alignItems: "center",
};


export default MainContent; 
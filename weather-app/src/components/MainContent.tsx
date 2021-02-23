import React, { CSSProperties } from 'react'; 
import { displayPartsToString } from 'typescript';
import ContentItem from './ContentItem';
import ContentItemTwo from './ContentItemTwo';
import ContentItemThree from './ContentItemThree';


function MainContent() {
    return(
        <div style={rootStyle}>
            <ContentItem/>
            <ContentItemTwo/>
            <ContentItemThree/>
        </div>
    )
}

const rootStyle: CSSProperties = {
  height: "80vh",
  background: "#1f4287",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  alignItems: "center",
};


export default MainContent; 
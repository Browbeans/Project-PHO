import React, { CSSProperties } from 'react'; 
import { displayPartsToString } from 'typescript';
import ContentItem from './ContentItem';

const imageAvenyn =
  "https://www.avenyn.se/wp-content/uploads/2016/11/avenyvandring700x350.jpg";

  const imageHisingen =
    "https://cached-images.bonnier.news/swift/bilder/epi-30-dn/UploadedImages/2016/3/29/283a28b8-4979-4d3b-9ebc-3b515b01299f/bigOriginal.jpg";

const imageJarntorget =
  "https://www.gp.se/image/policy:1.23707940:1581244196/image.jpg?f=Wide%26w=1200%26%24p%24f%24w=834285a";

interface Props{
    
}

const MainContent: React.FC<Props> = ()  => {
    return(
        <div style={rootStyle}>
            <ContentItem title="Avenyn" image={imageAvenyn}/>
            <ContentItem title="Andra Lång" image={imageJarntorget}/>
            <ContentItem title="Hisingen" image={imageHisingen}/>
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
import React, { CSSProperties } from 'react'; 
import { Link, Route, Switch } from 'react-router-dom';
import Avenyn from './Avenyn';
import BarNavigation from './BarNavigation';
import ContentItem from './ContentItem';
import Hisingen from './Hisingen';
import Jarntorget from './Jarntorget';

const imageAvenyn =
  "https://www.avenyn.se/wp-content/uploads/2016/11/avenyvandring700x350.jpg";

  const imageHisingen =
    "https://cached-images.bonnier.news/swift/bilder/epi-30-dn/UploadedImages/2016/3/29/283a28b8-4979-4d3b-9ebc-3b515b01299f/bigOriginal.jpg";

const imageJarntorget =
  "https://www.gp.se/image/policy:1.23707940:1581244196/image.jpg?f=Wide%26w=1200%26%24p%24f%24w=834285a";


const sohoBar = "https://fantasydining.com/wp-content/uploads/2016/06/soho-beer-house-andral%C3%A5ng.jpg"
  const cafePublik = "https://s3.eu-west-1.amazonaws.com/vinbanken.se/wp-content/uploads/2015/11/goteborgs-basta-barer.jpg"
  const hopsBar = "https://www.hopsbar.se/wp-content/uploads/2020/09/hopsbar-1024x560.jpg"
  const brewhouseBar = "https://eatie.imgix.net/hy8MLm2Ho9F9Yo6sg/jerntorgets-brygghus-olivedal-JAWZjHDMJ4smoSXvY.jpg?type=picture&fit=crop&crop=edges&w=800"  

  const sohotTitle = 'Soho-bar'
  const cafePublikTitle = 'Cafe Publik'
  const hopsTitle = 'Hops'
  const brewhouseTitle = 'Brygghuset'
  interface Props{
    
}

const MainContent: React.FC<Props> = ()  => {
    return (
      <div style={rootStyle}>
        <Link to="/avenyn" style={{ textDecoration: "none" }}>
          <ContentItem title="Avenyn" image={imageAvenyn} />
        </Link>
        <Link to="/jarntorget" style={{ textDecoration: "none" }}>
            <ContentItem title="Järntorget" image={imageJarntorget} />
        </Link>
        <Link to="/hisingen" style={{ textDecoration: "none" }}>
          <ContentItem title="Hisingen" image={imageHisingen} />
        </Link> 
        
        <Switch>
            <Route path="/" exact component={MainContent}/>
            <Route path="/avenyn" component={Avenyn} />
            <Route path="/jarntorget">
                <BarNavigation title="soho" image=""/>
            </Route> 
          <Route path="/hisingen" component={Hisingen} />
        </Switch>
      </div>
    );
}

const rootStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  height: '90rem',
  justifyContent: "space-around",
  alignItems: "center",
};


export default MainContent; 
import React, { CSSProperties } from 'react'; 
import { Link, Route, Switch } from 'react-router-dom';
import BarNavigation from './BarNavigation';
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
  
  
    const jarntorget = ['Soho', 'Cafe-publik', 'Brygghuset', 'Hops']
    const hisingen = ['Ölstugan', 'Kville-Biljard', 'Antibarbarus', 'Lindholmen-Streetfood']
    const avenyn = ['Yaki-da', 'Hardrock-cafe', 'Lounge', 'Valand']


    return (
      <div style={rootStyle}>
        <Switch>
            <Route exact path="/">
            <Link to="/avenyn" style={{ textDecoration: "none" }}>
              <ContentItem title="Avenyn" image={imageAvenyn} />
            </Link>
            <Link to="/jarntorget" style={{ textDecoration: "none" }}>
              <ContentItem title="Järntorget" image={imageJarntorget} />
            </Link>
            <Link to="/hisingen" style={{ textDecoration: "none" }}>
              <ContentItem title="Hisingen" image={imageHisingen} />
            </Link> 
            </Route>
            <Route path="/jarntorget">
                {jarntorget.map((value) => <BarNavigation id={value} key={value}/>)}
            </Route> 
            <Route path="/hisingen">
                {hisingen.map((value) => <BarNavigation id={value} key={value}/>)}
            </Route> 
            <Route path="/avenyn">
                {avenyn.map((value) => <BarNavigation id={value} key={value}/>)}
            </Route>
        </Switch>
      </div>
    );
}

const rootStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  minHeight: '90vh',
  justifyContent: "space-around",
  alignItems: "center",
};


export default MainContent; 
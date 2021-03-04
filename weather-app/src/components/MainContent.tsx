import { ReactComponent } from '*.svg';
import React, { CSSProperties, useDebugValue } from 'react'; 
import { Link, Route, Switch } from 'react-router-dom';
import BarItem from './BarItem';
import BarNavigation from './BarNavigation';
import ContentItem from './ContentItem';
import { Data } from './Data'
interface Props {
}

const MainContent: React.FC<Props> = ()  => {

  return (
    <div style={rootStyle}>
      
      <Switch>
          <Route exact path="/"> 
            {Data.map((area) => 
                <ContentItem title={area.name} key={area.name}/>
            )}
          </Route>
          {Data.map((area) => 
            <Route key={area.name} path={'/' + area.name}>
              {area.bars.map((bar) => <BarNavigation id={bar.title} key={bar.title}/>)}
            </Route>
          )}  
          {Data.map((area) => area.bars.map((bar) =>
              <Route key={area.name} path={'/' + bar.title}>
                <BarItem key={bar.title} object={bar}/>
              </Route>
            )
          )}
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
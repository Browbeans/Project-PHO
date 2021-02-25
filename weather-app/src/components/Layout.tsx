import React, { CSSProperties } from 'react'; 
import { Route, Switch } from 'react-router';
import Avenyn from './Avenyn';
import MainContent from './MainContent';
import NavBar from './NavBar'

function Layout() {
    return(
    <div style={rootStyle}>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Layout}/>
          <Route path="/avenyn" component={Avenyn} />
        </Switch>
        <MainContent/>
    </div>

    ) 
}

const rootStyle: CSSProperties = {
  height: "100vh",
  background: "#f3cf7a",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  flex: 1,
};

export default Layout; 
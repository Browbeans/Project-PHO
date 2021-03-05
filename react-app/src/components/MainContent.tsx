import React, { CSSProperties } from "react";
import { Route, Switch } from "react-router-dom";
import BarItem from "./BarItem";
import BarNavigation from "./BarNavigation";
import ContentItem from "./ContentItem";
import { Data } from "./Data";
import ErrorBoundary from "./ErrorBoundary";
interface Props {}

const MainContent: React.FC<Props> = () => {
  return (
    <div style={rootStyle}>
      <Switch>
        <Route exact path="/">
          {Data.map((area) => (
            <ErrorBoundary>
              <ContentItem title={area.name} key={area.name} />
            </ErrorBoundary>
          ))}
        </Route>
        {Data.map((area) => (
          <Route key={area.name} path={"/" + area.name}>
            {area.bars.map((bar) => (
              <BarNavigation id={bar.title} key={bar.title} />
            ))}
          </Route>
        ))}
        {Data.map((area) =>
          area.bars.map((bar) => (
            <Route key={area.name} path={"/" + bar.title}>
              <BarItem key={bar.title} object={bar} />
            </Route>
          ))
        )}
      </Switch>
    </div>
  );
};

const rootStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  minHeight: "90vh",
  justifyContent: "space-around",
  alignItems: "center",
};

export default MainContent;

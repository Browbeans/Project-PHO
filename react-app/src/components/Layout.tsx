import React, { CSSProperties } from "react";
import ErrorBoundary from "./ErrorBoundary";
import MainContent from "./MainContent";
import NavBar from "./NavBar";

function Layout() {
  return (
    <div style={rootStyle}>
      <NavBar />
      <ErrorBoundary>
        <MainContent />
      </ErrorBoundary>
    </div>
  );
}

const rootStyle: CSSProperties = {
  minHeight: "100vh",
  background: "#f3cf7a",
  display: "flex",
  flexDirection: "column",
  flex: 1,
};

export default Layout;

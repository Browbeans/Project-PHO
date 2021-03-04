import React, { CSSProperties, lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

const Layout = lazy(() => import('./Layout'));

function App() {
  return (
    <Suspense fallback={<div style={loadingStyle}>Loading...</div>}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;

const loadingStyle: CSSProperties = {
  background: "#f3cf7a",
  width: "100%",
  minHeight: "100vh",
  color: "black",
  textShadow: "1px 3px .1px #fff",
  fontSize: "4rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
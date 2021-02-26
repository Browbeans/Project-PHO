import React, { CSSProperties } from 'react'

const Avenyn = () => {
    return (
      <div>
        <main style={rootStyle}>
          <h1>Avenyn</h1>
        </main>
      </div>
    );
}

export default Avenyn


const rootStyle: CSSProperties = {
  background: "#f3cf7a",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "90vh",
};
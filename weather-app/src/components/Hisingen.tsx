import React, { CSSProperties } from 'react'

const Hisingen = () => {
    return (
        <div style={rootStyle}>
            <h1>Hisingen</h1>
        </div>
    )
}

export default Hisingen

const rootStyle: CSSProperties = {
  background: "#f3cf7a",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "90vh",
};
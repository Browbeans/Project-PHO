import React, { CSSProperties } from 'react'

const Jarntorget = () => {
    return (
        <div style={rootStyle}>
            <h1>Järntorget</h1>
        </div>
    )
}

export default Jarntorget


const rootStyle: CSSProperties = {
  background: "#f3cf7a",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "90vh",
};
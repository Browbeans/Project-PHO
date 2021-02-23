import React, { CSSProperties } from "react";

function ContentItemThree() {
  return (
    <div style={rootStyle}>
      <h2 style={textStyle}>Avenyn</h2>
    </div>
  );
}

const rootStyle: CSSProperties = {
  width: "20rem",
  margin: "2rem",
  height: "20rem",
  background: "black",
  borderRadius: "2rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const textStyle: CSSProperties = {
  fontWeight: "bold",
  color: "white",
  cursor: "pointer",
};

export default ContentItem;

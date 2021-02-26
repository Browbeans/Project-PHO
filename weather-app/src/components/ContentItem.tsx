import React, { CSSProperties } from 'react'; 

interface Props {
  title: string;
  image: string;
}
function ContentItem(props: Props) {
    return (
      <div style={rootStyle}>
        <h2 style={textStyle}>{props.title}</h2>
        <img style={imageStyle} src={props.image} alt="" />
      </div>
    );
}

const rootStyle: CSSProperties = {
  width: "30rem",
  margin: "2rem",
  height: "30rem",
  background: "#6e3b3b",
  borderRadius: "2rem",
  justifyContent: "space-between",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  cursor: "pointer",
  padding: "1rem",
};
const textStyle: CSSProperties = {
  fontWeight: "bold",
  fontSize: "2rem",
  color: "#f3cf7a",
  textShadow: "1px 1px .1px #ac3f21",
  padding: "1rem",
};

const imageStyle: CSSProperties = {
  width: "90%",
  height: "60%",
  borderRadius: "1rem",
  marginBottom: '1.7rem',
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
};

export default ContentItem; 
import React, { CSSProperties } from 'react'; 

interface Props {
  title: string;
  image: string;
}
function ContentItem(props: Props) {
    return (
      <div style={rootStyle}>
        <h2 style={textStyle}>{props.title}</h2>
        <img style={imageStyle} src={props.image} />
      </div>
    );
}

const rootStyle: CSSProperties = {
  width: "20rem",
  margin: "2rem",
  height: "20rem",
  background: "white",
  borderRadius: "2rem",
  justifyContent: 'space-between',
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  cursor: "pointer",
  padding: '1rem'
};
const textStyle: CSSProperties = {
    fontWeight: 'bold',
    fontSize: '2rem',
    color: 'black',
    padding: '1rem',
}

const imageStyle: CSSProperties = {
    width: '90%',
    height: '65%',
    borderRadius: '1rem'
}

export default ContentItem; 
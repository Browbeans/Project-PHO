import React, { CSSProperties } from 'react'; 
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div style={rootStyle}>
            <Link to="/" style={textStyle}>Götebärs</Link>
        </div>
    )
}

const rootStyle: CSSProperties = {
  width: "100%",
  minHeight: '10vh',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const textStyle: CSSProperties = {
  color: "black",
  fontSize: "3rem",
  fontWeight: 'bold',
  textShadow: "1px 3px .1px #fff",
  textDecoration: 'none'
};

export default NavBar; 
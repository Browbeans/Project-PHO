import { throws } from 'assert';
import React, { Component, CSSProperties } from 'react'

interface Props {}
interface State {
    review: String
}
export default class Recension extends Component<Props, State> {

    state = {
        review: ''
    };
    
  handleChange = (event: any) => {
    this.setState({ 
        review: event.target.value })
  }

  handleSubmit = (event: any) => {
      event.preventDefault();

  }

  render() {
    return (
      <div>
        <form style={formStyle} onSubmit={this.handleSubmit}>
          <label style={labelStyle}>Add Review:</label>
          <div style={divStyle}>
            <input
              placeholder="Add review..."
              style={inputStyle}
              type="text"
              onChange={this.handleChange}
            />
            <button style={buttonStyle} onClick={this.handleSubmit}>
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const formStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    margin: '2rem 0rem 1rem 0rem',
}
const labelStyle: CSSProperties  = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '1rem'
}

const inputStyle: CSSProperties = {
  width: "15rem",
  padding: "0.5rem",
  borderRadius: ".5rem",
  outline: "none",
  border: "solid 1px black",
  fontSize: "1.2rem",
  marginRight: ".5rem",
};

const buttonStyle: CSSProperties = {
  width: "5rem",
  height: "3rem",
  borderRadius: ".5rem",
  border: "solid 1px black",
  fontSize: "1.2rem",
  background: "#6e3b3b",
  color: "#f3cf7a",
  fontWeight: 'bold',
  cursor: 'pointer',
};

const divStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
}
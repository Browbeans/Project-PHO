import { Component, CSSProperties } from "react";

interface Props {}
interface State {
  review: String;
  list: Array<String>;
}
export default class Recension extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      review: "",
      list: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      review: event.target.value,
    });
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    this.state.list.push(this.state.review);
    this.setState({ list: this.state.list });
  };

  render() {
    return (
      <div>
        <form style={formStyle} onSubmit={this.handleSubmit}>
          <label style={labelStyle}>Add Review:</label>
          <div style={divStyle}>
            <input
              placeholder="Lägg till recension..."
              style={inputStyle}
              type="text"
              onChange={this.handleChange}
            />
            <button style={buttonStyle} onClick={this.handleSubmit}>
              +
            </button>
          </div>
          <div style={reviewStyle}>
            <h4 style={titleStyle}>Recensioner:</h4>
            <ul>
              {this.state.list.map((item) => (
                <li key={item.toString()} style={listStyle}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </form>
      </div>
    );
  }
}

const formStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  margin: "2rem 0rem 1rem 0rem",
};
const labelStyle: CSSProperties = {
  fontSize: "1.2rem",
  fontWeight: "bold",
  marginBottom: "1rem",
};

const inputStyle: CSSProperties = {
  width: "20rem",
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
  fontSize: "2.2rem",
  background: "#6e3b3b",
  color: "#f3cf7a",
  fontWeight: "bold",
  cursor: "pointer",
};

const divStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
};

const listStyle: CSSProperties = {
  listStyle: "none",
  padding: "1rem",
  borderRadius: ".5rem",
  border: "solid 1px black",
  margin: "1rem 0rem",
  background: "#ffff",
};

const titleStyle: CSSProperties = {
  marginTop: "1rem",
  color: "white",
};

const reviewStyle: CSSProperties = {
  borderRadius: ".5rem",
  border: "solid 1px black",
  padding: "1rem",
  margin: "1rem 0rem",
  height: "20rem",
  background: "#6e3b3b",
  overflow: "auto",
};

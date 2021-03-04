import React, { Component, CSSProperties, ErrorInfo } from "react";

interface Props {}
interface State {
  hasError: boolean;
}
export default class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ hasError: true });
    console.error(`Error: ${error}, ${errorInfo}`);
  }

  goBack() {
    window.history.back()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={errorStyle}>
          <h1>Något gick fel...</h1>
          <button onClick={this.goBack}>Tillbaka</button>
        </div>
      );
    }
    return this.props.children;
  }
}

const errorStyle: CSSProperties = {
  background: 'white',
  display: 'flex',
  width: 'inherit', 
  height: 'inherit',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center'
};

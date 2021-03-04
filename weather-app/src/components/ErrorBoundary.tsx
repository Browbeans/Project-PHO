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

  render() {
    if (this.state.hasError) {
      return (
        <div style={errorStyle}>
          <h1>Something went wrong...</h1>
        </div>
      );
    }
    return this.props.children;
  }
}

const errorStyle: CSSProperties = {
  background: 'white',
  width: 'inherit',
  height: 'inherit',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
};

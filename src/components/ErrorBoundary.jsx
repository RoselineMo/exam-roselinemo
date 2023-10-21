import React from "react";

class ErrorBoundary extends React.Component {
  state = {hasError: false};

  static getDerivedStateFromError(error) {
    return {hasError: true};
  }

  componentDidCatch(error, info) {
    console.log("Error:", error);
    console.log("Error Info:", info);
  }

  render() {
    const {children} = this.props;
    const {hasError} = this.state;

    if (hasError) {
      return (
        <div
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "2000px",
            background: "white",
            zIndex: 100,
            overflow: "hidden",
            position: "fixed",
            padding: "20px",
          }}
        >
          <h1>Oops! Something went wrong.</h1>
          <p style={{marginTop: "20px"}}>Refresh the page to go back.</p>
        </div>
      );
    } else {
      return children;
    }
  }
}

export default ErrorBoundary;

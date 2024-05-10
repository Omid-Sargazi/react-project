import React, { Component } from "react";

class ClassMousedown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
  }
  logMousePosition = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };
  componentDidMount = () => {
    window.addEventListener("mousemove", this.logMousePosition);
  };

  render() {
    return (
      <>
        <div>ClassMousedown</div>

        <h1>X: {this.state.x}</h1>
        <h1>Y: {this.state.y}</h1>
      </>
    );
  }
}

export default ClassMousedown;

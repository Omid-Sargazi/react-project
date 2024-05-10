import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidCatch(props) {
    document.title = `Clicked ${this.state.count} times`;
  }
  componentDidUpdate(prepProps, prevState) {
    document.title = `Clicked ${this.state.count} times`;
  }
  render() {
    return (
      <>
        <div>ClassComponent</div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Clicked {this.state.count} times
        </button>
      </>
    );
  }
}

export default ClassComponent;

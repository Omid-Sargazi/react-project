import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "",
    };
  }
  componentDidCatch(props) {
    document.title = `Clicked ${this.state.count} times`;
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Updating document title");
      document.title = `Clicked ${this.state.count} times`;
    }
  }
  render() {
    return (
      <>
        <input
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <div>ClassComponent</div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Clicked {this.state.count} times
        </button>
      </>
    );
  }
}

export default ClassComponent;

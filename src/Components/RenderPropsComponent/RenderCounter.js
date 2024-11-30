import React, { Component } from "react";

export class RenderCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  IncrementedCount = () => {
    this.setState((prevstate) => {
      return { count: prevstate.count + 1 };
    });
  };
  render() {
    return (
      <div>{this.props.children(this.state.count, this.IncrementedCount)}</div>
    );
  }
}

export default RenderCounter;

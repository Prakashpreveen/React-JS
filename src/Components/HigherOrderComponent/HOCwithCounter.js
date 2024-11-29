import React, { Component } from "react";

const UpdatedFunction = (OriginalFunction) => {
  class NewFunction extends Component {
    constructor() {
      super();
      this.state = {
        count: 0,
      };
    }
    Incremented = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };
    render() {
      return (
        <OriginalFunction
          count={this.state.count}
          Incremented={this.Incremented}
        />
      );
    }
  }
  return NewFunction;
};
export default UpdatedFunction;

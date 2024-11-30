import React, { Component } from "react";

const UpdatedFunction = (OriginalFunction, Increment) => {
  class NewFunction extends Component {
    constructor() {
      super();
      this.state = {
        count: 0,
      };
    }
    Incremented = () => {
      this.setState((prevState) => {
        return { count: prevState.count + Increment };
      });
    };
    render() {
      return (
        <OriginalFunction
          count={this.state.count}
          Incremented={this.Incremented}
          {...this.props} //Spread Operator if gave any props in App.js
        />
      );
    }
  }
  return NewFunction;
};
export default UpdatedFunction;

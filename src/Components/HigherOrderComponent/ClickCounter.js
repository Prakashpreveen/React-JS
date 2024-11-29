import React, { Component } from "react";
import UpdatedFunction from "./HOCwithCounter";

class ClickCounter extends Component {
  render() {
    const { count, Incremented } = this.props;
    return <button onClick={Incremented}>Clicked {count} Times</button>;
  }
}

export default UpdatedFunction(ClickCounter);

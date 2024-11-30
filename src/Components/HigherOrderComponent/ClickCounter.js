import React, { Component } from "react";
import UpdatedFunction from "./HOCwithCounter";

export class ClickCounter extends Component {
  render() {
    const { Incremented, count, name } = this.props;
    return (
      <div>
        <button onClick={Incremented}>
          {name} Clicked {count} Times
        </button>
      </div>
    );
  }
}

export default UpdatedFunction(ClickCounter, 5);

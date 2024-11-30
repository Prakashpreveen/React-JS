import React, { Component } from "react";
import UpdatedFunction from "./HOCwithCounter";

//Using Class Component
export class HoverCounter extends Component {
  render() {
    const { count, Incremented, name } = this.props;
    return (
      <div>
        <h2 onMouseOver={Incremented}>
          {name} Hoverd {count} Times
        </h2>
      </div>
    );
  }
}

export default UpdatedFunction(HoverCounter, 10);

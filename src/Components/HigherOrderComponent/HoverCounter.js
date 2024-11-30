import React, { Component } from "react";
import UpdatedFunction from "./HOCwithCounter";

//Using Class Component
export class HoverCounter extends Component {
  render() {
    const { count, Incremented } = this.props;
    return (
      <div>
        <h2 onMouseOver={Incremented}>Hoverd {count} Times</h2>
      </div>
    );
  }
}

export default UpdatedFunction(HoverCounter);

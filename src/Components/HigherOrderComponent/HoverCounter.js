import React, { Component } from "react";
import UpdatedFunction from "./HOCwithCounter";

class HoverCounter extends Component {
  render() {
    const { count, Incremented } = this.props;
    return (
      <div>
        <h1 onMouseOver={Incremented}>Hovered {count} Times</h1>
      </div>
    );
  }
}

export default UpdatedFunction(HoverCounter);

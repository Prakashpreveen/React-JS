import React, { Component, createRef } from "react";
import C from "./C";

class P extends Component {
  constructor(props) {
    super(props);
    this.pRef = createRef();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.pRef} />
        <C refs={this.pRef} />
      </div>
    );
  }
}

export default P;

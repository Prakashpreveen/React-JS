import React, { Component, createRef } from "react";

class ParentRef extends Component {
  constructor() {
    super();
    this.parref = createRef();
  }
  focusInput() {
    this.parref.current.focus();
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.parref} />
      </div>
    );
  }
}

export default ParentRef;

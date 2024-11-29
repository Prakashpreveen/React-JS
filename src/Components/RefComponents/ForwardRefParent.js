import React, { Component, createRef } from "react";
import ForwardRefChild from "./ForwardRefChild";

class ForwardRefParent extends Component {
  constructor(props) {
    super(props);
    this.myRef = createRef();
  }

  ClickHandler = () => {
    this.myRef.current.focus();
  };

  render() {
    return (
      <div>
        <ForwardRefChild ref={this.myRef} />
        <button onClick={this.ClickHandler}>Focus</button>
      </div>
    );
  }
}

export default ForwardRefParent;

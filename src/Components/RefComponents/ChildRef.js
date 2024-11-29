import React, { Component, createRef } from "react";
import ParentRef from "./ParentRef";

class ChildRef extends Component {
  constructor(props) {
    super(props);

    this.childref = createRef();
  }

  ClickHandler = () => {
    this.childref.current.focusInput();
  };

  render() {
    return (
      <div>
        <ParentRef ref={this.childref} />
        <button onClick={this.ClickHandler}>Focus</button>
      </div>
    );
  }
}

export default ChildRef;

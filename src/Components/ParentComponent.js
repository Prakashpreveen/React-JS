import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "Hello from Parent" };
  }

  greetParent = (childName) => {
    alert(this.state.message + ` from ${childName}`);
  };

  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        {/* Passing greetParent method as a prop to ChildComponent */}
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponent;

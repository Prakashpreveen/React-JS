import React, { Component } from "react";
import LifecycleB from "./MountingLifecycleB";

class LifecycleA extends Component {
  //Constructor Mehtod
  constructor() {
    super();
    this.state = {
      name: "DP",
    };
    console.log("LifecycleA Constructor Method");
  }

  //Static getDerivedStateFromProps Method:
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  //ComponentDidMount Method:
  componentDidMount() {
    console.log("LifecycleA ComponentDidMount");
  }

  // Render Method
  render() {
    console.log("LifecycleA Render Method");

    return (
      <div>
        <div>LifecycleA</div>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;

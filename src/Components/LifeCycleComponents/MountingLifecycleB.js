import React, { Component } from "react";

class LifecycleB extends Component {
  //Constructor Mehtod
  constructor() {
    super();
    this.state = {
      name: "DP",
    };
    console.log("LifecycleB Constructor Method");
  }

  //Static getDerivedStateFromProps Method:
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB getDerivedStateFromProps");
    return null;
  }

  //ComponentDidMount Method:
  componentDidMount() {
    console.log("LifecycleB ComponentDidMount");
  }

  // Render Method
  render() {
    console.log("LifecycleB Render Method");

    return <div>LifecycleB</div>;
  }
}

export default LifecycleB;

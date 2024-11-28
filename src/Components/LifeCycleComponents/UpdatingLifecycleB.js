import React, { Component } from "react";

class UpdateLifecycleB extends Component {
  constructor() {
    super();
    this.state = {
      name: "DP",
    };
    console.log("UpdateLifecycleB Constructor Method");
  }

  //Static getDerivedStateFromProps Method:
  static getDerivedStateFromProps(props, state) {
    console.log("UpdateLifecycleB getDerivedStateFromProps");
    return null;
  }

  //shouldComponentUpdate Method:
  shouldComponentUpdate() {
    console.log("UpdateLifecycleB shouldComponentUpdate");
    return true;
  }

  //getSanpshotBeforeUpdate Method:
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("UpdateLifecycleB getSnapshotBeforeUpdate");
    return null;
  }

  // componentDidUpdate Method:
  componentDidUpdate() {
    console.log("UpdateLifecycleB componentDidUpdate");
  }
  // Render Method
  render() {
    console.log("UpdateLifecycleB Render Method");

    return <div>UpdateLifecycleB</div>;
  }
}

export default UpdateLifecycleB;

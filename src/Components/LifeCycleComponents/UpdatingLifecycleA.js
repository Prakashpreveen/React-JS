import React, { Component } from "react";
import UpdateLifecycleB from "./UpdatingLifecycleB";

class UpdateLifecycleA extends Component {
  constructor() {
    super();
    this.state = {
      name: "DP",
    };
    console.log("UpdateLifecycleA Constructor Method");
  }

  //Static getDerivedStateFromProps Method:
  static getDerivedStateFromProps(props, state) {
    console.log("UpdateLifecycleA getDerivedStateFromProps");
    return null;
  }

  //shouldComponentUpdate Method:
  shouldComponentUpdate() {
    console.log("UpdateLifecycleA shouldComponentUpdate");
    return true;
  }

  //getSanpshotBeforeUpdate Method:
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("UpdateLifecycleA getSnapshotBeforeUpdate");
    return null;
  }

  // componentDidUpdate Method:
  componentDidUpdate() {
    console.log("UpdateLifecycleA componentDidUpdate");
  }

  //onClick function:
  changeState = () => {
    this.setState({
      name: "Divya Prakash",
    });
  };
  // Render Method
  render() {
    console.log("UpdateLifecycleA Render Method");
    return (
      <div>
        <div>UpdateLifecycleA</div>
        <button onClick={this.changeState}>Change State</button>
        <UpdateLifecycleB />
      </div>
    );
  }
}

export default UpdateLifecycleA;

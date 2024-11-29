import React, { Component } from "react";
import MemoComp from "./MemoComp";

class ParentComp extends Component {
  constructor() {
    super();
    this.state = {
      name: "Prakash",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Prakash",
      });
    }, 2000);
  }
  render() {
    return <MemoComp name={this.state.name} />;
  }
}

export default ParentComp;

import React, { Component } from "react";
import RegularComp from "./RegularComp";
import PureComp from "./PureComp";

export class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "prakash",
    };
  }

  //   componentDidMount() {
  //     setInterval(() => {
  //       this.setState({
  //         name: "prakash",
  //       });
  //     }, 2000);
  //   }

  render() {
    console.log("------------------Parent Componenet-----------------");

    return (
      <div>
        Regular Component
        <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;

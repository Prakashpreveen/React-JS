import React, { useState, Component } from "react";

//Event Binding In Functional Component:
function FunctionalBind() {
  const [msg, setMsg] = useState("");

  function Clicked() {
    setMsg("Functional Bind");
  }

  return (
    <div>
      <button onClick={Clicked}>CLICK</button>
      <div>{msg}</div>
    </div>
  );
}

//Event Binding in Class Component:

class ClassBind extends Component {
  constructor() {
    super();
    this.state = {
      msg: "",
    };
    // this.Clicked = this.Clicked.bind(this);
  }

  //   Clicked() {
  //     this.setState({
  //       msg: "Goodbye"

  //     });
  //   }

  Clicked = () => {
    this.setState({
      msg: "Class Bind",
    });
  };

  render() {
    return (
      // Three Different Approches 1,Bind 2.Arrow Function in onClick 3.Binding in the Constructor(Best Approach) 4.Arrow Function Method
      <div>
        {/* <button onClick={this.Clicked.bind(this)}>CLICK</button>*/}
        {/* <button onClick={() => this.Clicked()}>CLICK</button> */}
        <button onClick={this.Clicked}>CLICK</button>
        <div>{this.state.msg}</div>
      </div>
    );
  }
}

export { ClassBind, FunctionalBind };

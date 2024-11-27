import React, { Component } from "react";

//Even on Functional Component:
const FunctionClick = () => {
  function FunClick() {
    console.log("Function Clicked");
  }
  return <button onClick={FunClick}>Function Click</button>;
};
//Event in Class Componenet;
class ClassClick extends Component {
  ClaClick() {
    console.log("Class Clicked");
  }

  render() {
    return <button onClick={this.ClaClick}>Class Click</button>;
  }
}

export { FunctionClick, ClassClick };

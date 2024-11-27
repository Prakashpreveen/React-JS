import React, { Component } from "react";

//Functional Destructuring:
const FunctionDestructure = ({ name, job }) => {
  return (
    <h1>
      Hi {name} your job is {job}
    </h1>
  );
};
//Another Way:
// const Destructure = (props) => {
//   const { name, job } = props;
//   return (
//     <h1>
//       Hi {name} your job is {job}
//     </h1>
//   );
// };

//Class Destructuring:
class ClassDestructure extends Component {
  render() {
    const { name, job } = this.props;
    return (
      <h1>
        Hello {name} your job is {job}
      </h1>
    );
  }
}

export { FunctionDestructure, ClassDestructure };

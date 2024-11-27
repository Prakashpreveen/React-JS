// NOTE: NOT CALLED IN APP.JS IF NEED TO RUN AND CHECK PLEASE IMPORT IN APP.JS

import React, { Component } from "react";

//Functional Component:
const Greet = () => {
  return <h1>Welcome to the Page!</h1>;
};

//Class Componenet:
class GreetClass extends Component {
  render() {
    return <h1>This Page Contains Everything You Need!!</h1>;
  }
}

//Functional Component using Properties(props):
const GreetProps = (props) => {
  return (
    <h2>
      Welcome {props.name} your code is {props.code}
    </h2>
  );
};

//Class component using Properties(props):
class GreetClassProps extends Component {
  render() {
    return (
      <h2>
        You have an New Assignment Assassin {this.props.code} and the character
        you need to eliminate is {this.props.target}
      </h2>
    );
  }
}

//Functional Component using State:
class AssignClass extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: "By Clicking the Below Button You Accept the Assigment",
      btn: "Assign It",
    };
  }
  Accepted() {
    this.setState({
      msg: "GOOD LUCK",
      btn: "Assigned",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={() => this.Accepted()}>{this.state.btn}</button>
      </div>
    );
  }
}

export { Greet, GreetClass, GreetProps, GreetClassProps, AssignClass };

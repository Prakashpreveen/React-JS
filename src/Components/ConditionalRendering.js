import React, { Component } from "react";

class ConditionalRender extends Component {
  constructor() {
    super();
    this.state = { loggedIn: true };
  }
  render() {
    // If / ELSE
    if (this.state.loggedIn) {
      return <h1>Welcome Prakash</h1>;
    } else {
      return <h1>Welcome Guest</h1>;
    }

    // ELEMENT VARIABLE APPROACH:
    let message;
    if (this.state.loggedIn) {
      message = "Welcome Prakash";
    } else {
      message = "Welcome Guest";
    }
    return <div>{message}</div>;

    // TERENARY CONDITIONAL OPERATOR:
    return this.state.loggedIn ? (
      <div>Welcome Prakash</div>
    ) : (
      <div>Welcome Guest</div>
    );

    // SHORT CIRCUIT OPERATOR
    return this.state.loggedIn && <div>Hello Prakash</div>;
  }
}

export default ConditionalRender;

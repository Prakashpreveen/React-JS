import React, { Component } from "react";

//Class Component with Constructor:
class State extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello Visitor",
      btn: "Subscribe",
    };
  }

  // On-Click Function:
  Subscribed() {
    this.setState({
      message: "Thanks for Subscribing!!",
      btn: "Subscribed",
    });
  }
  // Rendering the Data:
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.Subscribed()}>{this.state.btn}</button>
      </div>
    );
  }
}

export default State;

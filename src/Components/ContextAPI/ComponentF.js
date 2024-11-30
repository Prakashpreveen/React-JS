import React, { Component } from "react";
import { UserConsumer } from "./ContextDemo";

export class ComponentF extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
          {(username) => {
            return <h2>Hello {username}</h2>;
          }}
        </UserConsumer>
      </div>
    );
  }
}

export default ComponentF;

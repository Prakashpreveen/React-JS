import React, { Component, createRef } from "react";

class C extends Component {
  ClickHandler = () => {
    if (this.props.refs.current) {
      this.props.refs.current.focus();
    }
  };
  render() {
    return (
      <div>
        <button onClick={this.ClickHandler}>Focus</button>
      </div>
    );
  }
}

export default C;

import React, { Component } from "react";

export class ClickCounterTwo extends Component {
  render() {
    const { count, IncrementedCount } = this.props;
    return (
      <div>
        <button onClick={IncrementedCount}>Clicked {count} Times</button>
      </div>
    );
  }
}

export default ClickCounterTwo;

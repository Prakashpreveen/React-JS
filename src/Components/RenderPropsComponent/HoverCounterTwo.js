import React, { Component } from "react";

export class HoverCounterTwo extends Component {
  render() {
    const { count, IncrementedCount } = this.props;
    return (
      <div>
        <h2 onMouseOver={IncrementedCount}>Hovered {count} Times</h2>
      </div>
    );
  }
}

export default HoverCounterTwo;

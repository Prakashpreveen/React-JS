import React, { createRef, Component } from "react";

export class RefsDemo extends Component {
  constructor(props) {
    super(props);

    this.MyRef = createRef();
  }

  componentDidMount() {
    this.MyRef.current.focus();
  }

  ClickHandler = () => {
    alert(this.MyRef.current.value);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.MyRef} />
        <button onClick={this.ClickHandler}>Alert</button>
      </div>
    );
  }
}

export default RefsDemo;

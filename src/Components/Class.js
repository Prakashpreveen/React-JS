import React, { Component } from "react";

// Basic Class Component
class Class extends Component {
  render() {
    return <h1>Basic Class Component</h1>;
  }
}

// Class Component using Properties(Props)
class ClassProps extends Component {
  render() {
    return (
      <div>
        <h1>
          Class {this.props.comp} using {this.props.method}
        </h1>
        {this.props.children}
      </div>
    );
  }
}
export { Class, ClassProps };

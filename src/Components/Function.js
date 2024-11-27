import React from "react";

// Basic Function Component:
const Function = () => {
  return <h1>Basic Function Component</h1>;
};

// Function Component using Properties(Props):
const FunctionProps = (props) => {
  return (
    <div>
      <h1>
        Function {props.comp} using {props.method}
      </h1>
      {props.children}
    </div>
  );
};

export { Function, FunctionProps };

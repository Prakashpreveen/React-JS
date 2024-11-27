import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <h2>Child Component</h2>
      {/* Invoking the method passed from ParentComponent */}
      <button onClick={() => props.greetHandler("Child")}>Greet Parent</button>
    </div>
  );
}

export default ChildComponent;

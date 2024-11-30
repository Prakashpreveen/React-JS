import React from "react";
import UpdatedFunction from "./HOCwithCounter";

//Using Functional Component
function ClickCounter(props) {
  const { count, Incremented } = props;
  return (
    <div>
      <button onClick={Incremented}>Clicked {count} Times</button>
    </div>
  );
}

export default UpdatedFunction(ClickCounter);

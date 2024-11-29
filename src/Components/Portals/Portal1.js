import React, { useState } from "react";
import Portal2 from "./Portal2";

function Portal1() {
  const [IsOpen, SetOpen] = useState(false);

  const ClickHandler = () => {
    SetOpen(!IsOpen);
  };

  return (
    <div>
      <h1>Parent Root</h1>
      <button onClick={ClickHandler}>{IsOpen ? "Close" : "Open"} Portal</button>
      {IsOpen && <Portal2 props={ClickHandler} />}
    </div>
  );
}

export default Portal1;

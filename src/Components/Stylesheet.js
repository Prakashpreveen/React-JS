import React from "react";
import "./myStyles.css";

function Stylesheet(props) {
  let className = props.primary ? "primary" : "";
  return (
    <div>
      <h1 className={`${className} font`}>My Style Sheet</h1>
    </div>
  );
}

export default Stylesheet;

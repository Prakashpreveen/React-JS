import React from "react";
import ReactDOM from "react-dom";

function Portal2({ props }) {
  return ReactDOM.createPortal(
    <div>
      <h3>Child Root</h3>
      <button onClick={props}>Close</button>
    </div>,
    document.getElementById("portal-root")
  );
}

export default Portal2;

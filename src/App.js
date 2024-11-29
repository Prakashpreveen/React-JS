import React, { Component, createElement } from "react";
import logo from "./logo.svg";
import "./App.css";

// import PortalDemo from "./Components/PortalDemo";
import Portal1 from "./Components/Portals/Portal1";

function App() {
  return (
    <div className="App">
      {
        // <PortalDemo />
        <Portal1 />
      }
    </div>
  );
}

export default App;

import React, { Component, createElement } from "react";
import logo from "./logo.svg";
import "./App.css";

import ParentComp from "./Components/PureComponent/ParentComp";

function App() {
  return (
    <div className="App">
      <ParentComp />
    </div>
  );
}

export default App;

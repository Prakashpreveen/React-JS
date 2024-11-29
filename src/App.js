import React, { Component, createElement } from "react";
import logo from "./logo.svg";
import "./App.css";

// import ParentComp from "./Components/PureComponent/ParentComp";
// import RefsDemo from "./Components/RefComponents/RefsDemo";
// import ChildRef from "./Components/RefComponents/ChildRef";
import P from "./Components/RefComponents/P";

function App() {
  return (
    <div className="App">
      {/* <ParentComp />
      <ParentComp />
      <RefsDemo />
      <ChildRef /> */}
      <P />
    </div>
  );
}

export default App;

import React, { Component, createElement } from "react";
import logo from "./logo.svg";
import "./App.css";

// import ParentComp from "./Components/PureComponent/ParentComp";
import RefsDemo from "./Components/RefsDemo";

function App() {
  return (
    <div className="App">
      {/* <ParentComp /> */}
      {/* <ParentComp /> */}
      <RefsDemo />
    </div>
  );
}

export default App;

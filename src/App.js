import React, { Component, createElement } from "react";
import logo from "./logo.svg";
import "./App.css";

// import PortalDemo from "./Components/PortalDemo";
// import Portal1 from "./Components/Portals/Portal1";
// import Hero from "./Components/ErrorBoundaryFolder/Hero";
// import ErrorBoundary from "./Components/ErrorBoundaryFolder/ErrorBoundary";
import ClickCounter from "./Components/HigherOrderComponent/ClickCounter";
import HoverCounter from "./Components/HigherOrderComponent/HoverCounter";

function App() {
  return (
    <div className="App">
      {
        // <PortalDemo />
        // <Portal1 />
        // <div>
        //   <ErrorBoundary>
        //     <Hero heroname={"Batman"} />
        //   </ErrorBoundary>
        //   <ErrorBoundary>
        //     <Hero heroname={"superman"} />
        //   </ErrorBoundary>
        //   <ErrorBoundary>
        //     <Hero heroname={"Joker"} />
        //   </ErrorBoundary>
        // </div>
        <div>
          <ClickCounter />
          <HoverCounter />
        </div>
      }
    </div>
  );
}

export default App;

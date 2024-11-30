import React, { Component, createElement } from "react";
import logo from "./logo.svg";
import "./App.css";

// import PortalDemo from "./Components/PortalDemo";
// import Portal1 from "./Components/Portals/Portal1";
// import Hero from "./Components/ErrorBoundaryFolder/Hero";
// import ErrorBoundary from "./Components/ErrorBoundaryFolder/ErrorBoundary";
// import ClickCounter from "./Components/HigherOrderComponent/ClickCounter";
// import HoverCounter from "./Components/HigherOrderComponent/HoverCounter";
// import RenderCounter from "./Components/RenderPropsComponent/RenderCounter";
// import ClickCounterTwo from "./Components/RenderPropsComponent/ClickCounterTwo";
// import HoverCounterTwo from "./Components/RenderPropsComponent/HoverCounterTwo";
// import RenderCounter from "./Components/RenderPropsComponent/RenderCounter";
import ComponentC from "./Components/ContextAPI/ComponentC";
import { UserProvider } from "./Components/ContextAPI/ContextDemo";

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
        // <div className="HOC">
        //   <ClickCounter name={"prakash"} />
        //   <HoverCounter name={"prakash"} />
        // </div>
        <div>
          {/* <ClickCounterTwo />
          <HoverCounterTwo /> */}
          {/* <div className="RENDER PROPS">
            <RenderCounter>
              {(count, IncrementedCount) => (
                <ClickCounterTwo
                  count={count}
                  IncrementedCount={IncrementedCount}
                />
              )}
            </RenderCounter>

            <RenderCounter>
              {(count, IncrementedCount) => (
                <HoverCounterTwo
                  count={count}
                  IncrementedCount={IncrementedCount}
                />
              )}
            </RenderCounter>
          </div> */}
          <div className="CONTEXT">
            <UserProvider value="Prakash">
              <ComponentC />
            </UserProvider>
          </div>
        </div>
      }
    </div>
  );
}

export default App;

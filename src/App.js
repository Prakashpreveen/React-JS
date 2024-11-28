import React, { Component, createElement } from "react";
import logo from "./logo.svg";
import "./App.css";

//IMPORTING FILES:
// import { Function, FunctionProps } from "./Components/Function";
// import { Class, ClassProps } from "./Components/Class";
// import Jsx from "./Components/JSX";
// import State from "./Components/State";
// import Counter from "./Components/Counter";
// import {
//   FunctionDestructure,
//   ClassDestructure,
// } from "./Components/Destructuring";
// import { FunctionClick, ClassClick } from "./Components/EventClick";
// import { ClassBind, FunctionalBind } from "./Components/EventBind";
// import ParentComponent from "./Components/ParentComponent";
// import ConditionalRender from "./Components/ConditionalRendering";
// import ListRendering from "./Components/ListRendering";
// import Stylesheet from "./Components/Stylesheet";
// import Inline from "./Components/Inline";
// import "./appStyles.css";
// import styles from "./appStyles.module.css";
// import { Practice, Practice1, Practice2, Practice3 } from "./Styles/Practice";
// import FormClass from "./Components/FormHandling/Form";
import LifecycleA from "./Components/LifeCycleComponents/MountingLifecycleA";
import UpdateLifecycleA from "./Components/LifeCycleComponents/UpdatingLifecycleA";

function App() {
  return (
    <div className="App">
      {
        // <LifecycleA />
        <UpdateLifecycleA />

        //   <div>
        //     <div className = "BASIC FUNCTION AND CLASS">
        //       <Function />
        //       <Class />
        //     </div>
        //     <div classname = 'PROPS'>
        //       <FunctionProps comp="Component" method="Props">
        //         <p>Basic Children Function Component</p>
        //       </FunctionProps>
        //       <ClassProps comp="Component" method="Props">
        //         <p>Basic Children Class Component</p>
        //       </ClassProps>
        //       <div className = "STATE SETSTATE">
        //         <State />
        //         <Counter />
        //       </div>
        //     </div>
        //   </div>
        //   /* <Jsx />  */
        // <div>
        //   <FunctionDestructure name="Spongebob" job="FryCook" />
        //   <ClassDestructure name="Patrick Star" job="UnEmployeed" />
        // </div>
        // <div>
        //   {/* <FunctionClick />
        //   <ClassClick /> */}
        //   <ClassBind />
        //   <FunctionalBind />
        // <ParentComponent />
        // <div className="CONDITIONAL RENDERING">
        //   <ConditionalRender />
        // </div>
        // <div className="LIST RENDERING">
        //   <ListRendering />
        // </div>
        // <div className="CSS STYLES">
        // <div>
        //   <Stylesheet primary={true} />
        //   <Inline />
        //   <h1 className="error">Error</h1>
        //   <h1 className={styles.success}>Success</h1>
        // <div>
        //   <Practice />
        //   <Practice1 />
        //   <Practice2 />
        //   <Practice3 />
        // </div>
        // <FormClass />
        // </div>
        // </div>
        // </div>
      }
    </div>
  );
}

export default App;

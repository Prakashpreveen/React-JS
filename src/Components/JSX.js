import React from "react";

const Jsx = () => {
  //WITH JSX
  return (
    <div className="dummy-class">
      {" "}
      <h1>With JSX</h1>
    </div>
  );
  //WITHOUT JSX
  //   return React.createElement(
  //     "div",
  //     className ='dummy-class',
  //     React.createElement("h1", null, "Without JSX")
  //   );
};

export default Jsx;

import React from "react";

function PersonRendering({ person }) {
  // Destructure person prop
  return (
    <div>
      <h2>
        I'm {person.name}, and I'm {person.age} years old. My employment status
        is {person.job}.
      </h2>
    </div>
  );
}

export default PersonRendering;

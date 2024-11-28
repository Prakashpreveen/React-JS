import React from "react";

function FragmentColumn() {
  const items = [
    {
      id: 1,
      name: "Prakash",
    },
    {
      id: 2,
      name: "John",
    },
    {
      id: 3,
      name: "Doe",
    },
  ];
  return (
    <>
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <p>{item.name}</p>
        </React.Fragment>
      ))}
    </>
  );
}

export default FragmentColumn;

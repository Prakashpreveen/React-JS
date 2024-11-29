import React from "react";

function MemoComp({ name }) {
  console.log(`Memo Component ${name}`);

  return <div>{name}</div>;
}
export default React.memo(MemoComp);

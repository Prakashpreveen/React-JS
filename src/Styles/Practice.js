import React from "react";
import "./Practice.css";
import styles from "./practiceStyles.module.css";
import styled from "styled-components";

//In-Line Styling:
function Practice() {
  return (
    <div>
      <div style={{ backgroundColor: "Yellow", padding: "20px" }}>
        <h1 style={{ color: "red", fontSize: "16px" }}>InLine Method</h1>
      </div>
    </div>
  );
}

//CSS Style-Sheet:
const Practice1 = () => {
  return (
    <div>
      <h1>Hello Style!</h1>
    </div>
  );
};

//CSS Modules:
const Practice2 = () => {
  return <h1 className={styles.bigblue}>Hello with CSS Module</h1>;
};

//Styled Components:

const StyledDiv = styled.div`
  background-color: lightblue;
  padding: 20px;
`;

const Practice3 = () => {
  return <StyledDiv>Hello Styled Components!</StyledDiv>;
};

export { Practice, Practice1, Practice2, Practice3 };

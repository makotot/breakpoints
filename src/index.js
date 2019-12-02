import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const mq = ({ breakPoints = [], styles = [] }) => {
  return breakPoints.reduce((accumulator, current, index) => {
    const key = `@media(min-width: ${current})`;
    accumulator[key] = { ...styles[index] };
    return accumulator;
  }, {});
};

const Box = styled.div(props => ({
  padding: "1rem",
  backgroundColor: "#ccc",
  ...mq({
    breakPoints: ["320px", "480px"],
    styles: [
      {
        backgroundColor: "#ff0"
      },
      {
        backgroundColor: "#00f"
      }
    ]
  })
}));

function App() {
  return (
    <div>
      <Box>box</Box>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

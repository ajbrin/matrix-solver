import Matrix from "./Matrix";
import React, { useState } from "react";
import styled from "styled-components";
import { generateEmptyMatrix } from "../matrices";

const Grid = styled.div`
  height: 25vh;
  width: 20vw;
  background-color: #db7093;
  display: grid;
  grid-template-columns: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
  grid-template-rows: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
  & > button:hover {
    background-color: #4caf50;
  }
`;

const MatrixCreate = () => {
  const [elements, updateElements] = useState(
    generateEmptyMatrix(10, 10).map((row, i) => row.map((col, j) => [j, false]))
  );

  return (
    <Grid>
      {elements.map((row, i) =>
        row.map((col, j) => (
          <button
            style={j[1] === true ? { backgroundColor: "#000" } : null}
            onMouseOver={() => {
              updateElements(
                elements.filter((row, r) => r <= j).map(row =>
                  row.map((col, c) => {
                    return c < i ? [c, true] : [c, false];
                  })
                )
              );
            }}
          />
        ))
      )}
    </Grid>
  );
};

export default MatrixCreate;

import Matrix from "./Matrix";
import React from "react";
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

const filter = (matrix, i, j) => {
  return matrix.filter((row, r) => r <= i).filter((col, c) => c <= j);
};

const MatrixCreate = () => {
  const elements = generateEmptyMatrix(10, 10).map((row, i) =>
    row.map((col, j) => j)
  );

  return (
    <Grid>
      {elements.map((row, i) =>
        row.map((col, j) => (
          <button
            onMouseOver={() =>
              elements
                .filter((row, r) => r <= i)
                .map(row => row.filter((col, c) => c < j))}
          />
        ))
      )}
    </Grid>
  );
};

export default MatrixCreate;

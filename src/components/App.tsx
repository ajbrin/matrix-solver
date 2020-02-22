import React, { useState } from "react";

import {
  matrixAddition,
  matrixSubtraction,
  matrixMultiplication
} from "../matrices";
import { MatrixDisplay } from "./MatrixDisplay";
import styled from "styled-components";
import Header from "./Header";

const performMultiplication = (
  matrices: number[][][],
  operations: String[]
) => {
  const newMatrix = [...matrices];
  for (let i = 0; i < newMatrix.length - 1; i++) {
    let a = newMatrix[i];
    let b = newMatrix[i + 1];
    if (operations[i] === "*") {
      newMatrix[i + 1] = matrixMultiplication(a, b);
      newMatrix[i] = null;
    }
  }
  return newMatrix;
};

const performOperations = (matrices: number[][][], operations: String[]) => {
  const newMatrix = performMultiplication(matrices, operations).filter(
    matrix => matrix !== null
  );
  const newOperations = operations.filter(op => op != "*");
  return newMatrix.reduce((acc, val, index) => {
    if (newOperations[index - 1] === "+") {
      return matrixAddition(acc, val);
    }
    if (newOperations[index - 1] === "-") {
      return matrixSubtraction(acc, val);
    }
    if (newOperations[index - 1] === "$") {
      return acc;
    }
  });
};

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #cec5c5;
`;

const App: React.FC = () => {
  const [matrices, updateMatrices] = useState([
    //[[2, 4], [6, 8]],
    //[[4, 8], [12, 16]],
    //[[92, 8], [16, 4]],
    //[[99, 9], [9, 9]],
    //[[8, 7], [9, 8]],
    //[[56, 7], [91, 892]]
  ]);
  const [operations, updateOperations] = useState([
    "+",
    "-",
    "+",
    "-",
    "*",
    "$"
  ]);

  return (
    <Container>
      <Header />
      <MatrixDisplay matrices={matrices} operations={operations} />
    </Container>
  );
};

export default App;

//<button
// onClick={() => {
// const resultMatrix = [performOperations(matrices, operations)];
// updateMatrices(resultMatrix);
// updateOperations(["$"]);
//}}
///>

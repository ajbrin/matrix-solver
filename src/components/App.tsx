import React, { useState } from "react";

import {
  matrixAddition,
  matrixSubtraction,
  matrixMultiplication
} from "../matrices";
import { MatrixDisplay } from "./MatrixDisplay";
import styled from "styled-components";

const performMultiplication = (matrices: number[][][]) => {
  //perform multiplication first
  return;
};

const performOperations = (matrices: number[][][], operations: String[]) => {
  let a = matrices[0];
  for (let i = 1; i < matrices.length; i++) {
    let b = matrices[i];
    if (operations[i - 1] === "+") a = matrixAddition(a, b);
    if (operations[i - 1] === "-") a = matrixSubtraction(a, b);
    if (operations[i - 1] === "*") {
      a = matrixMultiplication(a, b);
    }
  }
  return a;
};

const Container = styled.div`
  width: 400px;
  height: 400px;
  margin: 30px auto;
  background-color: #add8e6;
`;

const App: React.FC = () => {
  const matrices = [
    [[4, 5, 6], [7, 8, 9]],
    [[4, 5, 6], [7, 8, 9]],
    [[4, 5, 6], [7, 8, 9], [3, 5, 1]]
  ];
  const [operations, addOperation] = useState(["+", "*"]);

  console.log(performOperations(matrices, operations));

  return (
    <Container>
      <MatrixDisplay matrices={matrices} operations={operations} />
    </Container>
  );
};

export default App;

import React, { useState } from "react";
import Matrix from "./Matrix";
import MatrixCreate from "./MatrixCreate";
import styled from "styled-components";

interface Props {
  matrices: number[][][];
  operations: string[];
}

const Container = styled.div`
  width: 100vw;
  height: 90vh;
  margin-top: 10vh;
  background-color: #ffc0cb;
`;
const Span = styled.span`display: flex;`;

const Input = styled.input`
  width: 20px;
  height: 20px;
`;

export const MatrixDisplay = ({ matrices, operations }: Props) => {
  const [matrixes, updateMatrixes] = useState([]);
  const [operationz, updateOperations] = useState([]);

  return (
    <Container>
      {matrices.map((matrix, i) => {
        return (
          <Span>
            <Matrix matrix={matrix} />
            <Input value={operations[i]} />
          </Span>
        );
      })}
      <MatrixCreate />
    </Container>
  );
};

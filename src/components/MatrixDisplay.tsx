import React from "react";
import Matrix from "./Matrix";
import styled from "styled-components";

interface Props {
  matrices: number[][][];
  operations: string[];
}

const Span = styled.span`display: flex;`;

const Input = styled.input`
  width: 20px;
  height: 20px;
`;

export const MatrixDisplay = ({ matrices, operations }: Props) => {
  return (
    <Span>
      {matrices.map((matrix, i) => {
        return (
          <Span>
            <Matrix matrix={matrix} />
            {operations[i] && operations[i] != "$" ? (
              <Input value={operations[i]} />
            ) : i < matrix.length - 1 ? (
              <Input />
            ) : null}
          </Span>
        );
      })}
    </Span>
  );
};

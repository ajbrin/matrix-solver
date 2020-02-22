import React from "react";
import styled from "styled-components";

const Table = styled.table`border: 1px solid black;`;

interface Props {
  matrix: number[][];
}

const Matrix = ({ matrix }: Props) => {
  return (
    <Table>
      {matrix.map(row => (
        <tr>
          {row.map(el => (
            <td>
              <input />
            </td>
          ))}
        </tr>
      ))}
    </Table>
  );
};

export default Matrix;

export const addRows = (a: number[], b: number[]) => {
  return a.map((v, i) => v + b[i]);
};

export const subtractRows = (a: number[], b: number[]) => {
  return a.map((v, i) => v - b[i]);
};

export const matrixAddition = (a: number[][], b: number[][]) => {
  return a.map((row, i) => addRows(row, b[i]));
};

export const matrixSubtraction = (a: number[][], b: number[][]) => {
  return a.map((row, i) => subtractRows(row, b[i]));
};

export const getMatrixColumns = (a: number[][]) => {
  return a[0].length;
};

export const getMatrixRows = (a: number[][]) => {
  return a.length;
};

export const matricesAreValid = (a: number[][], b: number[][]) => {
  return getMatrixColumns(a) === getMatrixRows(b);
};

export const generateEmptyMatrix = (rows: number, cols: number) => {
  return [...Array(rows)].fill(0).map(() => [...Array(cols)].fill(0));
};

export const dotProduct = (a: number[], b: number[]) => {
  return a.map((value, i) => value * b[i]).reduce((acc, val) => acc + val, 0);
};
export const matrixMultiplication = (a: number[][], b: number[][]) => {
  if (matricesAreValid(a, b)) {
    const rows = getMatrixRows(a);
    const cols = getMatrixColumns(b);
    return generateEmptyMatrix(rows, cols).map((resultRow, i) =>
      resultRow.map((element: number, j: number) => {
        const column = b.map(row => row[j]);
        const row = a[i];
        return dotProduct(row, column);
      })
    );
  }
};

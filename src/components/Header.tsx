import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  width: 100vw;
  height: 10vh;
  position: absolute;
  display: flex;
  background-color: red;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  & > li {
    margin-left: 50px;
  }
`;

const NewMatrixButton = styled.button`
  height: 50px;
  width: 50px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <List>
        <li>
          <h2> Matrix Visualiser </h2>
        </li>
        <li>
          <NewMatrixButton />
        </li>
        <li>
          <h3>Determinant</h3>
        </li>
        <li>
          <h3>Inverse</h3>
        </li>
        <li>
          <h3>Gaussian</h3>
        </li>
        <li>
          <h3>Cramer</h3>
        </li>
        <li>
          <h3>Undo</h3>
        </li>
        <li>
          <h3>Solve</h3>
        </li>
      </List>
    </StyledHeader>
  );
};

export default Header;

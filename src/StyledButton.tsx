// src/StyledButton.tsx
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #6200ee;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #3700b3;
  }
`;

export default StyledButton;

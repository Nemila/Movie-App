import styled from "styled-components";

export const Button = styled.button`
  color: ${({ color }) => color || `black`};
  background-color: ${({ bg }) => bg || `whitesmoke`};
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0.7em 2em;
  font-weight: 500;
  border-radius: 2em;
`;

import styled from "styled-components";

export const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 150px);
  row-gap: 5px;
  align-content: center;
  justify-content: space-around;
  justify-items: center;
  flex-grow: 1;
`;

export const Input = styled.input`
  outline: none;
  border: none;
  border-radius: 10px;
  background: #4444;
  color: white;
  margin: 1rem 0;
  padding: 1rem 1rem;
  width: 100%;
  & small {
    display: inline-block;
    margin: 16px 0;
  }
  &:focus {
    outline: 2px solid #da0037;
    box-shadow: 0 0 10px 0 #da0037;
  }
`;

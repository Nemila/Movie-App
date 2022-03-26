import styled from "styled-components";

export const StyledModal = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  
  background-color: whitesmoke;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: black;
  z-index: 20;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
  & > div {
    display: flex;
    flex-direction column;
    padding: 1rem;
    gap: 1rem;
  }
  & span {
    text-decoration: underline;
  }
`;

export const ExitButton = styled.button`
  background-color: white;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0.5em 1rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
  font-weight: 500;
  position: absolute;
  top: 0;
  left: 0;
`;

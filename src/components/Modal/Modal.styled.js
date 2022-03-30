import styled from "styled-components";

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;

  outline: none;

  width: 290px;
  max-height: 290px;
  min-height: 290px;

  position: fixed;
  top: ${({ modal }) => (modal ? `50%` : `-100%`)};
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  background-color: white;
  padding: 8px;

  & h3 {
    border-bottom: 1px solid lightgrey;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
`;

export const TextBox = styled.div`
  padding: 4px;
  overflow-y: scroll;
  text-align: justify;
  margin-top: 8px;
  flex-grow: 1;
  border: 1px solid lightgrey;
  color: black;
`;

export const BadgeContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const Badge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: black;
  color: white;

  padding: 4px;
  border-radius: 2px;

  transition: 0.4s ease all;

  gap: 8px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.6);
  }
`;

export const ModalTitle = styled.h3`
  color: #da0037;
`;

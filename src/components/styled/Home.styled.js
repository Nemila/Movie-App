import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Sep = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #444444;
`;

export const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 150px);
  row-gap: 5px;
  align-content: center;
  justify-content: space-around;
  justify-items: center;
`;

export const Footer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #444444;
  & p {
    font-style: italic;
    font-size: 12px;
  }
`;

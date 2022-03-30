import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  min-height: 100vh;

  margin: 2.5rem auto 0 auto;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 4.5rem;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 80%;

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

export const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 150px);
  row-gap: 5px;
  align-content: center;
  justify-content: space-around;
  justify-items: center;
`;

export const Pending = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 64px;
  height: 64px;

  border: 10px solid white;
  border-color: white transparent white transparent;
  border-radius: 50%;

  animation: rotate 0.5s linear infinite;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(180deg);
    }
  }
`;

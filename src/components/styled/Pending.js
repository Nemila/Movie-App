import styled from "styled-components";

export const Pending = styled.div`
  position: absolute;
  top: 60%;
  left: 40%;
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

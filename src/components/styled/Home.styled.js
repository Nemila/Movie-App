import styled from "styled-components";
import bg from "../../assets/landing.jpg";

export const StyledLanding = styled.div`
  width: 100%;
  min-height: 100vh;

  background-image: url(${bg});
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;

  & h2 {
    animation: slideFromTop 0.6s linear 1;
  }

  & div {
    padding: 1rem;
    width: 60%;
    min-width: 350px;
  }

  & div p {
    margin: 32px 0 48px 0;
    line-height: 28px;
    animation: slideFromLeft 2s linear 1;
  }

  @media (max-width: 768px) {
    & div {
      width: 100%;
    }
  }

  @keyframes slideFromTop {
    from {
      transform: translateY(-1000%);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes slideFromBottom {
    from {
      transform: translateY(1000%);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes slideFromRight {
    from {
      transform: translateX(200%);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes slideFromLeft {
    from {
      transform: translateX(-200%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

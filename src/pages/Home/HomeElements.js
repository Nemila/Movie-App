import styled from "styled-components";
import { Link } from "react-router-dom";
import homeBg from "../../assets/landing.jpg";

export const StyledHome = styled.div`
  width: 100%;
  min-height: 100vh;

  background-image: url(${homeBg});
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    text-align: center;
  }
`;
export const Title = styled.h1`
  font-weight: lighter;
`;
export const Content = styled.div`
  padding: 1rem;
  width: 60%;
  min-width: 350px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;
export const Desc = styled.p`
  margin: 32px 0 48px 0;
  line-height: 28px;
`;
export const StartBtn = styled(Link)`
  text-decoration: none;
  color: white;

  padding: 8px;
  background: firebrick;
  border-radius: 5px;

  transition: 0.5s ease all;
  font-weight: bold;
`;

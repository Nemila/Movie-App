import styled from "styled-components";
import { Link } from "react-router-dom";
import { app_config } from "../../utils/datas";

export const StyledHome = styled.div`
  width: 100%;
  min-height: 100vh;

  background-image: url(${app_config.home.bgImage});
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;

  & h2 {
    color: ${app_config.home.textLight ? "white" : "black"};
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Desc = styled.p`
  margin: 32px 0 48px 0;
  line-height: 28px;
  color: ${app_config.home.textLight ? "white" : "black"};
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

export const StartBtn = styled(Link)`
  text-decoration: none;
  color: ${app_config.home.btnColor};

  padding: 8px;
  ${app_config.home.btnOutline &&
  `border: 2px solid ${app_config.home.btnOutlineBorder};`};
  background: ${app_config.home.btnOutline ? "none" : app_config.home.btnBg};
  border-radius: 5px;

  transition: 0.5s ease all;
  font-weight: bold;

  &:hover {
    ${app_config.home.btnOutline &&
    `color: ${app_config.home.btnOutlineText};
    background-color: ${app_config.home.btnBg || app_config.theme.light}
    `}
  }
`;

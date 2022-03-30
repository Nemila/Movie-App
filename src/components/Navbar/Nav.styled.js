import styled from "styled-components";
import { Link } from "react-router-dom";
import { app_config } from "../../utils/datas";

export const Navbar = styled.nav`
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;

  /* color: #ededed; */
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1rem;
    & div {
      display: none;
    }
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  margin: 0 16px;
  color: ${app_config.navbar.textLight ? "white" : "black"};
  opacity: 0.6;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16")}px;
  transition: 0.5s ease all;
  &:hover {
    opacity: 1;
  }
`;

export const NavToggle = styled.button`
  width: 28px;
  height: 28px;

  color: white;
  background-color: ${app_config.togglebar.btnDanger
    ? app_config.theme.danger
    : app_config.theme.primary};

  border: none;
  cursor: pointer;
  padding: 4px;

  border-radius: 2px;
  transition: 0.5s ease all;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const ToggleBar = styled.div`
  min-height: 100vh;
  width: 100%;

  background-color: ${app_config.togglebar.bgLight ? "white" : "black"};

  position: fixed;
  top: 0;
  left: ${({ showed }) => (showed ? `0` : `100%`)};
  z-index: 7;

  transition: 0.5s ease all;

  & h3,
  & a {
    color: ${app_config.togglebar.bgLight ? "black" : "light"} !important;
  }

  & div {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
`;

export const Logo = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  color: ${app_config.navbar.textLight ? "white" : "black"};
`;

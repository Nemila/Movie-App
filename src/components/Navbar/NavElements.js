import styled from "styled-components";
import { Link } from "react-router-dom";
import { FcClapperboard } from "react-icons/fc";

export const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  width: 100%;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #191919;
`;
export const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;
export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  font-size: 20px;
  opacity: 0.8;
  transition: 0.4s ease-in-out all;
  &:hover {
    opacity: 1;
  }
`;
export const LogoIcon = styled(FcClapperboard)`
  font-size: 2rem;
  margin-right: 8px;
`;
export const ToggleBtn = styled.button`
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 2px;
  cursor: pointer;
  font-size: 18px;
  opacity: 0.8;
  transition: 0.4s ease-in-out all;
  &:hover {
    opacity: 1;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  list-style-type: none;
  margin-left: 8px;
`;
export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 8px 10px;
  transition: 0.2s ease-in-out all;
  &:hover,
  &.active {
    background-color: white;
    color: black;
  }
`;

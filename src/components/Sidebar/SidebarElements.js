import styled from "styled-components";
import { Link } from "react-router-dom";
import { FcClapperboard } from "react-icons/fc";

export const StyledSidebar = styled.div`
  position: fixed;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  left: 0;
  z-index: 20;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};

  width: 100%;
  height: 100%;

  transition: 0.4s ease-in-out all;

  background-color: #191919;
`;
export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
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
  background: transparent;
  border: none;
  outline: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
`;
export const SidebarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100%-80px);
`;
export const SidebarMenu = styled.div`
  width: 100%;
  height: calc(100%-80px);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
  align-items: center;
  text-align: center;
`;
export const SidebarItem = styled.li`
  list-style-type: none;
`;
export const SidebarLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

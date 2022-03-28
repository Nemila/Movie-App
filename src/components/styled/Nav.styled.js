import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.nav`
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;

  color: #ededed;
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const NavLink = styled(Link)`
  margin: 0 16px;
  text-decoration: none;
  color: white;
  opacity: 0.6;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16")}px;
  transition: 0.5s ease all;
  &:hover {
    opacity: 1;
  }
`;

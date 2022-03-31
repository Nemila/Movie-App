import styled from "styled-components";
import { Link } from "react-router-dom";

export const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 150px);
  row-gap: 5px;
  align-content: center;
  justify-content: space-around;
  justify-items: center;
`;
export const NavLink = styled(Link)`
  text-decoration: none;
  margin: 0 16px;
  color: white;
  opacity: 0.6;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16")}px;
  transition: 0.5s ease all;
  &:hover {
    opacity: 1;
  }
`;

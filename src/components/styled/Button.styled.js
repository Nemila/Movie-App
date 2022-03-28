import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled.button`
  color: ${({ color }) => color || `black`};
  background-color: ${({ bg }) => bg || `whitesmoke`};

  outline: none;
  border: none;
  border-radius: 2em;
  cursor: pointer;

  padding: 0.7em 2em;
  font-size: 1em;
  font-weight: bold;

  transition: 0.5s ease all;

  &:hover {
    box-shadow: 0 0 5px 0 black;
    transform: scale(0.95);
  }
`;

export const ButtonLink = styled.a`
  color: ${({ color }) => color || `black`};
  background-color: ${({ bg }) => bg || `whitesmoke`};

  padding: 0.7em 2em;
  font-weight: bold;
  border-radius: 2em;

  text-decoration: none;
  text-align: center;

  transition: 0.5s ease all;

  &:hover {
    box-shadow: 0 0 5px 0 black;
    transform: scale(0.95);
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ color }) => color || `black`};
  background-color: ${({ bg }) => bg || `whitesmoke`};

  padding: 0.7em 2em;
  font-weight: bold;
  border-radius: 2em;

  text-decoration: none;
  text-align: center;

  transition: 0.5s ease all;

  &:hover {
    box-shadow: 0 0 5px 0 black;
    transform: scale(0.95);
  }
`;

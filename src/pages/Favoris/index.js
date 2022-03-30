import React from "react";
import PropTypes from "prop-types";
import { MovieContainer } from "./Favoris.styled";
import { Container } from "../../components/Styled/Container.styled";
import MovieItem from "../../components/MovieItem/MovieItem";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavLink = styled(Link)`
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

const Favoris = ({ favoris, setFavoris }) => {
  return (
    <Container>
      <NavLink to="/favoris" onClick={() => setFavoris([])}>
        Reset my favoris list
      </NavLink>
      <MovieContainer>
        {favoris &&
          favoris.map((movie) => (
            <MovieItem
              key={movie.id}
              movie={movie}
              favoris={favoris}
              setFavoris={setFavoris}
            />
          ))}
      </MovieContainer>
    </Container>
  );
};

Favoris.propTypes = {
  favoris: PropTypes.array.isRequired,
  setFavoris: PropTypes.func.isRequired,
};

Favoris.defaultProps = {
  favoris: [],
};

export default Favoris;

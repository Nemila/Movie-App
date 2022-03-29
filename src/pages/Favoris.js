import React from "react";
import PropTypes from "prop-types";
import { Container, MovieContainer } from "../components/styled/Favoris.styled";
import { NavLink } from "../components/styled/Nav.styled";
import MovieItem from "../components/MovieItem";

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

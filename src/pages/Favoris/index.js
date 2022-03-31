import React from "react";
import PropTypes from "prop-types";
import { MovieContainer, NavLink } from "./Favoris.styled";
import { Container } from "../../components/Styled/Container.styled";
import MovieItem from "../../components/MovieItem/MovieItem";

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

import React from "react";
import PropTypes from "prop-types";
import { StyledFavoris, ResetFavBtn, MovieContainer } from "./Favoris.styled";
import MovieItem from "../../components/MovieItem/MovieItem";

const Favoris = ({ favoris, setFavoris }) => {
  return (
    <StyledFavoris>
      <ResetFavBtn to="/favoris" onClick={() => setFavoris([])}>
        Reset my favoris list
      </ResetFavBtn>
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
    </StyledFavoris>
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

// React
import React from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

// Styled
import {
  Container,
  MovieContainer,
  Pending,
} from "../components/styled/Movies.styled";

// Components
import MovieItem from "../components/MovieItem";
import NextPage from "../components/NextPage";
import { useFetch } from "../components/hooks/useFetch";

const Movies = ({ favoris, setFavoris }) => {
  let { pageIndex } = useParams();

  // Get API's Datas
  let { data, error, pending } = useFetch(
    `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9b761130dd428aca1816daeb0b306519&page=${pageIndex}`
  );
  let movies = data && data.results;

  return (
    <>
      <Container>
        <MovieContainer>
          {movies &&
            movies.map((movie) => (
              <MovieItem
                key={movie.id}
                movie={movie}
                favoris={favoris}
                setFavoris={setFavoris}
              />
            ))}
          {error && <p>{error}</p>}
        </MovieContainer>
        {pending && <Pending></Pending>}
        {data && (
          <NextPage pageIndex={pageIndex} totalPages={data.total_pages} />
        )}
      </Container>
    </>
  );
};
Movies.propTypes = {
  favoris: PropTypes.array.isRequired,
  setFavoris: PropTypes.func.isRequired,
};

Movies.defaultProps = {
  favoris: [],
};
export default Movies;

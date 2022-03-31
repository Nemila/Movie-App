// React
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

// Styled
import {
  MovieContainer,
  Input,
  Container,
  SearchBtn,
  SearchWrapper,
  SearchTip,
  SearchIcon,
  ErrorMessage,
  ErrorIcon,
  Pending,
} from "./MoviesElements";

// Components
import MovieItem from "../../components/MovieItem/MovieItem";
import NextPage from "../../components/NextPage/NextPage";

const Movies = ({ favoris, setFavoris }) => {
  let { pageIndex } = useParams();

  let [data, setData] = useState(null);
  let [pending, setPending] = useState(true);
  let [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9b761130dd428aca1816daeb0b306519&page=${pageIndex}`
    )
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setPending(false);
      })
      .catch((error) => {
        setPending(false);
        setError(error.message);
      });
  }, [pageIndex]);

  return (
    <>
      <Container>
        <SearchWrapper autoComplete="off">
          <p>Research a movie : </p>
          <SearchTip>
            You might not find what you're looking for on this page. If it is
            the case, please go to the next one.
          </SearchTip>
          <Input
            type="text"
            name="search_value"
            placeholder="Search a movie..."
          />
          <SearchBtn>
            Search <SearchIcon />
          </SearchBtn>
        </SearchWrapper>

        <MovieContainer>
          {data &&
            data.results.map((movie) => (
              <MovieItem
                key={movie.id}
                movie={movie}
                favoris={favoris}
                setFavoris={setFavoris}
              />
            ))}
          {error && (
            <ErrorMessage>
              <ErrorIcon />
              {error}
            </ErrorMessage>
          )}
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

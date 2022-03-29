// React
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

// Images
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Styled
import {
  Container,
  MovieContainer,
  Pending,
  Input,
} from "../components/styled/Movies.styled";
import { Button } from "../components/styled/Button.styled";

// Components
import MovieItem from "../components/MovieItem";
import NextPage from "../components/NextPage";
import useFetch from "../components/hooks/useFetch.js";

const Movies = ({ favoris, setFavoris }) => {
  let [search, setSearch] = useState(null);
  let { pageIndex } = useParams();

  // Get API's Datas
  let { data, error, pending } = useFetch(
    `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9b761130dd428aca1816daeb0b306519&page=${pageIndex}`
  );
  let movies = data && data.results;
  let handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target["search_value"].value);
  };

  return (
    <>
      <Container>
        <form onSubmit={handleSearch} autoComplete="off">
          <p>Research a movie : </p>
          <small>
            You might not find what you're looking for on this page. If it is
            the case, please go to the next one.
          </small>
          <Input
            type="text"
            name="search_value"
            placeholder="Search a movie..."
          />

          <Button bg={"#DA0037"} color={"#fff"}>
            Search
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </Button>
        </form>
        <MovieContainer>
          {movies &&
            movies.map((movie) =>
              search && search !== " " ? (
                movie.title.toLowerCase().includes(search) ? (
                  <MovieItem
                    key={movie.id}
                    movie={movie}
                    favoris={favoris}
                    setFavoris={setFavoris}
                  />
                ) : null
              ) : (
                <MovieItem
                  key={movie.id}
                  movie={movie}
                  favoris={favoris}
                  setFavoris={setFavoris}
                />
              )
            )}
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

import React, { useEffect, useState } from "react";
import { Container, Sep, MovieContainer, Footer } from "./styled/Home.styled";
import { Button } from "./styled/Button.styled";
import MovieItem from "./MovieItem";
import NextPage from "./NextPage";
import Modal from "./Modal";
import Nav from "./Nav";

const Home = () => {
  let [movies, setMovies] = useState(null);
  let [favoris, setFavoris] = useState(
    localStorage.getItem("favoriteMovies")
      ? JSON.parse(localStorage.getItem("favoriteMovies"))
      : []
  );
  let [modalParams, setModalParams] = useState({});
  let [pageIndex, setPageIndex] = useState(1);
  let [filtered, setFiltered] = useState(false);
  let [modal, setModal] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9b761130dd428aca1816daeb0b306519&page=${pageIndex}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((err) => console.error(err));
  }, [pageIndex]);

  useEffect(() => {
    localStorage.setItem("favoriteMovies", JSON.stringify(favoris));
  }, [favoris]);

  return (
    <>
      <Nav setFiltered={setFiltered} setModal={setModal} />
      <Container>
        <Sep>
          {filtered ? "Favoris list" : "List of movies"}
          {filtered && <Button onClick={() => setFavoris([])}>Reset</Button>}
        </Sep>
        {modal && (
          <Modal
            modalParams={modalParams}
            favoris={favoris}
            setFavoris={setFavoris}
            filtered={filtered}
            setModal={setModal}
          />
        )}
        <MovieContainer>
          {movies &&
            !filtered &&
            movies.map((movie) => (
              <MovieItem
                key={movie.id}
                movie={movie}
                favoris={favoris}
                setFavoris={setFavoris}
                setModal={setModal}
                setModalParams={setModalParams}
              />
            ))}
          {filtered &&
            favoris.map((movie) => (
              <MovieItem
                key={movie.id}
                movie={movie}
                favoris={favoris}
                setFavoris={setFavoris}
                setModal={setModal}
                setModalParams={setModalParams}
              />
            ))}
        </MovieContainer>
        {!filtered && (
          <NextPage pageIndex={pageIndex} setPageIndex={setPageIndex} />
        )}
      </Container>
      <Footer>
        <p>
          Created by Lamine assisted by Alassane | All rights reserved 2022 -
          2023
        </p>
      </Footer>
    </>
  );
};

export default Home;

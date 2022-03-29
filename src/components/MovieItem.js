import React from "react";
import { Card, Badge } from "./styled/MovieItem.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieItem = ({
  movie: {
    id,
    title,
    vote_average: vote,
    poster_path: poster,
    overview: sum,
    release_date: date,
  },
  favoris,
  setFavoris,
}) => {
  let manageFavoris = () => {
    let isMovieInFavoris = favoris.find((movie) => movie.title === title);
    if (isMovieInFavoris) {
      let filteredList = favoris.filter((movie) => movie.title !== title);
      setFavoris(filteredList);
    } else {
      setFavoris([
        {
          id: id,
          title: title,
          vote_average: vote,
          poster_path: poster,
          overview: sum,
          release_date: date,
        },
        ...favoris,
      ]);
    }
  };

  return (
    <>
      <Card>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster}`}
          alt={`poster of ${title}`}
        />
        <p> {title} </p>
        <Badge>
          <FontAwesomeIcon color="yellow" icon="fa-solid fa-star" />
          {vote}
        </Badge>
        <Badge right={true} onClick={manageFavoris}>
          Favoris
          <FontAwesomeIcon
            color={
              favoris.find((movie) => movie.title === title) ? "red" : "white"
            }
            icon="fa-solid fa-heart"
          />
        </Badge>
      </Card>
    </>
  );
};

export default MovieItem;

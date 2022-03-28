import React from "react";
import { Card, Badge } from "./styled/MovieItem.styled";
import star from "../assets/star.svg";

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
      alert("Removed from your favoris");
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
      alert("Added to your favoris");
    }
  };

  return (
    <>
      <Card onClick={manageFavoris}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster}`}
          alt={`poster of ${title}`}
        />
        <p> {title} </p>
        <Badge>
          <img src={star} alt="star icon" />
          {vote}
        </Badge>
      </Card>
    </>
  );
};

export default MovieItem;

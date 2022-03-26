import React from "react";
import { Card, Badge } from "./styled/MovieItem.styled";
import { Img } from "./styled/Img.styled";
import star from "../assets/star.svg";

const MovieItem = ({
  movie: { id, title, vote_average: vote, poster_path: poster, overview: sum },
  favoris,
  setFavoris,
  filtered,
  setModal,
  setModalParams,
}) => {
  let showModal = () => {
    setModalParams({
      id,
      title: title,
      vote_average: vote,
      poster_path: poster,
      overview: sum,
    });
    setModal(true);
  };

  return (
    <>
      <Card onClick={showModal}>
        <Img
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

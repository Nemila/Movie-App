import React, { useState } from "react";
import { Card, Badge } from "./MovieItem.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../components/Modal/Modal";

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
  let [modal, setModal] = useState(false);
  let [modalParams, setModalParams] = useState({});

  let handleModal = () => {
    setModalParams({
      id: id,
      title: title,
      vote: vote,
      poster: poster,
      sum: sum,
      date: date,
    });
    setModal(true);
  };
  return (
    <>
      <Modal
        modalParams={modalParams}
        setFavoris={setFavoris}
        favoris={favoris}
        modal={modal}
        setModal={setModal}
      />
      <Card onClick={handleModal}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster}`}
          alt={`poster of ${title}`}
        />
        <p> {title} </p>
        <Badge>
          <FontAwesomeIcon color="gold" icon={faStar} />
          {vote}
        </Badge>
        <Badge right={true}>
          Favoris
          <FontAwesomeIcon
            color={
              favoris.find((movie) => movie.title === title) ? "red" : "white"
            }
            icon={faHeart}
          />
        </Badge>
      </Card>
    </>
  );
};

export default MovieItem;

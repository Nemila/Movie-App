import React, { useState } from "react";
import { Card, Badge } from "./MovieItem.styled";
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
        <Badge>{vote}</Badge>
        <Badge right={true}>Favoris</Badge>
      </Card>
    </>
  );
};

export default MovieItem;

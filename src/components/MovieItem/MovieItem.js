import React, { useState } from "react";
import { Card, Poster, Badge, CardDesc } from "./MovieItemElements";
import Modal from "../../components/Modal/Modal";
import { AiFillHeart, AiFillStar } from "react-icons/ai";

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
    setModal(!modal);
  };
  return (
    <>
      <Modal
        modalParams={modalParams}
        setFavoris={setFavoris}
        favoris={favoris}
        modal={modal}
        handleModal={handleModal}
      />
      <Card onClick={handleModal}>
        <Poster
          src={`https://image.tmdb.org/t/p/w500/${poster}`}
          alt={`poster of ${title}`}
        />
        <CardDesc>{title}</CardDesc>
        <Badge>
          <AiFillStar color="gold" />
          {vote}
        </Badge>
        <Badge right={true}>
          Favoris
          <AiFillHeart
            color={
              favoris.find((movie) => movie.title === title) ? "red" : "white"
            }
          />
        </Badge>
      </Card>
    </>
  );
};

export default MovieItem;

import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaHeartBroken } from "react-icons/fa";

import {
  StyledModal,
  ModalTitle,
  BadgeContainer,
  Badge,
  TextBox,
} from "./ModalElements";

function Modal({ modalParams, favoris, setFavoris, modal, handleModal }) {
  let manageFavoris = () => {
    let isMovieInFavoris = favoris.find(
      (movie) => movie.title === modalParams.title
    );
    if (isMovieInFavoris) {
      let filteredList = favoris.filter(
        (movie) => movie.title !== modalParams.title
      );
      setFavoris(filteredList);
    } else {
      setFavoris([
        {
          id: modalParams.id,
          title: modalParams.title,
          vote_average: modalParams.vote,
          poster_path: modalParams.poster,
          overview: modalParams.sum,
          release_date: modalParams.date,
        },
        ...favoris,
      ]);
    }
  };
  return (
    <StyledModal modal={modal} onClick={handleModal}>
      <ModalTitle>{modalParams.title}</ModalTitle>
      <BadgeContainer>
        <Badge>{modalParams.vote}</Badge>
        <Badge onClick={manageFavoris}>
          {favoris.find((movie) => movie.title === modalParams.title) ? (
            <FaHeartBroken />
          ) : (
            <AiFillHeart />
          )}
        </Badge>
      </BadgeContainer>
      <TextBox>{modalParams.sum}</TextBox>
    </StyledModal>
  );
}

export default Modal;

import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  StyledModal,
  ModalTitle,
  BadgeContainer,
  Badge,
  TextBox,
} from "./Modal.styled";

export default function Modal({
  modalParams,
  favoris,
  setFavoris,
  modal,
  setModal,
}) {
  let myModal = useRef(null);

  useEffect(() => {
    modal && myModal.current.focus();
  }, [modal]);

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
  let resetModal = () => {
    modal && setModal(false);
  };
  return (
    <StyledModal ref={myModal} tabIndex={0} modal={modal} onBlur={resetModal}>
      <ModalTitle>{modalParams.title}</ModalTitle>
      <BadgeContainer>
        <Badge>
          <FontAwesomeIcon icon={faStar} color={"gold"} />
          {modalParams.vote}
        </Badge>
        <Badge onClick={manageFavoris}>
          <FontAwesomeIcon
            icon={faHeart}
            color={
              favoris.find((movie) => movie.title === modalParams.title)
                ? "red"
                : "white"
            }
          />
        </Badge>
      </BadgeContainer>
      <TextBox>{modalParams.sum}</TextBox>
      <Badge onClick={resetModal}>Exit</Badge>
    </StyledModal>
  );
}

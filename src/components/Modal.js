import React from "react";
import { StyledModal, ExitButton } from "./styled/Modal.styled";
import { Img } from "./styled/Img.styled";
import { Button, ButtonLink } from "./styled/Button.styled";
import exit from "../assets/exit.svg";

const Modal = ({
  modalParams: {
    id,
    title,
    poster_path: poster,
    vote_average: vote,
    isFav,
    overview: sum,
    release_date: date,
  },
  favoris,
  setFavoris,
  filtered,
  setModal,
}) => {
  let handleFav = () => {
    let alreadyFav = favoris.find((movie) => movie.title === title);
    setModal(false);
    if (alreadyFav) {
      if (filtered) {
        let favWithoutExcep = favoris.filter((movie) => movie.title !== title);
        setFavoris(favWithoutExcep);
      }
    } else {
      setFavoris((prevFav) => [
        {
          id: id,
          title: title,
          vote_average: vote,
          poster_path: poster,
          overview: sum,
          isFav: true,
          release_date: date,
        },
        ...prevFav,
      ]);
    }
  };

  let s_title = title.toLowerCase().split(" ");
  let s_date = date.split("-");

  s_title = s_title.join("-");
  s_date = s_date[0];

  return (
    <StyledModal>
      <Img
        src={`https://image.tmdb.org/t/p/w500/${poster}`}
        alt={`poster of ${title}`}
      />
      <div>
        <p>
          <span>Title:</span> {title}
        </p>
        <p>
          <span>Vote average:</span> {vote}
        </p>
        <p style={{ maxHeight: "100px", overflowY: "scroll" }}>
          <span>Description:</span> {sum}
        </p>
        <Button bg="#DA0037" color="#fff" onClick={handleFav}>
          {filtered ? "Remove" : "Add"}
        </Button>
        <ButtonLink
          bg="#DA0037"
          color="#fff"
          href={`https://www.cimacinema.com/${s_title}-${s_date}`}
          onClick={handleFav}
        >
          Watch
        </ButtonLink>
      </div>
      <ExitButton bg="#DA0037" color="#fff">
        <img
          src={exit}
          width="32px"
          alt="Exit"
          onClick={() => setModal(false)}
        />
      </ExitButton>
    </StyledModal>
  );
};

export default Modal;

import React from "react";
import { Navbar } from "./styled/Nav.styled";
import { Button } from "./styled/Button.styled";

const Nav = ({ setFiltered, setModal }) => {
  let handleFil = () => {
    setFiltered((prev) => !prev);
    setModal(false);
  };
  return (
    <Navbar>
      <h1>RockyReels</h1>
      <Button onClick={handleFil}>Favoris</Button>
    </Navbar>
  );
};

export default Nav;

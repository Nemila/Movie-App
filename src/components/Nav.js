import React from "react";
import { Navbar, NavLink } from "./styled/Nav.styled";

const Nav = () => {
  return (
    <Navbar>
      <NavLink to="/" fontSize={24}>
        RockyReels
      </NavLink>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies/1">Movies</NavLink>
        <NavLink to="/favoris">Favoris</NavLink>
      </div>
    </Navbar>
  );
};

export default Nav;

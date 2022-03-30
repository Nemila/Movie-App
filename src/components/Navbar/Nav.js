import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faHeart,
  faClapperboard,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { app_config } from "../../utils/datas";

// Style
import { Navbar, NavLink, NavToggle, ToggleBar, Logo } from "./Nav.styled";

const Nav = () => {
  let [toggle, setToggle] = useState(false);

  return (
    <>
      <Navbar>
        <Logo to="/">{app_config.navbar.logoText}</Logo>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies/1">Movies</NavLink>
          <NavLink to="/favoris">Favoris</NavLink>
        </div>
        <NavToggle onClick={() => setToggle(!toggle)}>
          <FontAwesomeIcon icon={faBars} />
        </NavToggle>
      </Navbar>

      <ToggleBar showed={toggle}>
        <Navbar>
          <Logo to="/">{app_config.navbar.logoText}</Logo>
          <NavToggle onClick={() => setToggle(!toggle)}>
            <FontAwesomeIcon icon={faBars} />
          </NavToggle>
        </Navbar>
        <div>
          <NavLink onClick={() => setToggle(false)} to="/">
            <FontAwesomeIcon icon={faHouse} /> Home
          </NavLink>
          <NavLink onClick={() => setToggle(false)} to="/movies/1">
            <FontAwesomeIcon icon={faClapperboard} /> Movies
          </NavLink>
          <NavLink onClick={() => setToggle(false)} to="/favoris">
            <FontAwesomeIcon icon={faHeart} />
            Favoris
          </NavLink>
        </div>
      </ToggleBar>
    </>
  );
};

export default Nav;

import React from "react";
import { FaBars } from "react-icons/fa";

// Style
import {
  Navbar,
  NavbarContainer,
  Logo,
  LogoIcon,
  ToggleBtn,
  NavMenu,
  NavItem,
  NavLink,
} from "./NavElements";

function Nav({ toggle }) {
  return (
    <>
      <Navbar>
        <NavbarContainer>
          <Logo to="/">
            <LogoIcon />
            RockyReels
          </Logo>
          <ToggleBtn onClick={toggle}>
            <FaBars />
          </ToggleBtn>
          <NavMenu>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/movies/1">Movies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/favoris" className="active">
                Favoris
              </NavLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Navbar>
    </>
  );
}

export default Nav;

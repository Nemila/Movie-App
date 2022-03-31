import React from "react";
import { FaTimes } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { MdMovie, MdFavorite } from "react-icons/md";

import {
  StyledSidebar,
  SidebarHeader,
  Logo,
  LogoIcon,
  ToggleBtn,
  SidebarWrapper,
  SidebarMenu,
  SidebarItem,
  SidebarLink,
} from "./SidebarElements";

function Sidebar({ isOpen, toggle }) {
  return (
    <StyledSidebar onClick={toggle} isOpen={isOpen}>
      <SidebarHeader>
        <Logo to="/">
          <LogoIcon />
          RockyReels
        </Logo>
        <ToggleBtn>
          <FaTimes />
        </ToggleBtn>
      </SidebarHeader>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarItem>
            <SidebarLink to="/">
              <AiFillHome /> Home
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to="/movies/1">
              <MdMovie /> Movies
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to="/favoris">
              <MdFavorite /> Favorites
            </SidebarLink>
          </SidebarItem>
        </SidebarMenu>
      </SidebarWrapper>
    </StyledSidebar>
  );
}

export default Sidebar;

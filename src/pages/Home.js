import React from "react";
import { StyledLanding } from "../components/styled/Home.styled";
import { StyledLink } from "../components/styled/Button.styled";

const Home = () => {
  return (
    <StyledLanding>
      <div>
        <h2>Rocky Reels is the best free movie manager</h2>
        <p>
          Discover new movies, manage your favorite ones and watch them for free
          on our website. No account required, no Adds or redirections, just you
          and your movies. Just press the button below and begin your adventure!
        </p>
        <StyledLink to="/movies/1" bg={"#DA0037"} color={"#fff"}>
          Start Now
        </StyledLink>
      </div>
    </StyledLanding>
  );
};

export default Home;

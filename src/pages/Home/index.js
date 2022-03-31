import React from "react";
import { StyledHome, Content, Desc, StartBtn, Title } from "./HomeElements";

const Home = () => {
  return (
    <StyledHome>
      <Content>
        <Title>Rocky reels is the best free movie manager</Title>
        <Desc>
          Discover new movies, manage your favorite ones and watch them for free
          on our website. No account required, no adds or redirects, just you
          and your movies. Just press the button below and begin your adventure!
        </Desc>
        <StartBtn to="/movies/1">Start Now</StartBtn>
      </Content>
    </StyledHome>
  );
};

export default Home;

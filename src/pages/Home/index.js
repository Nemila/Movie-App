import React from "react";
import { app_config } from "../../utils/datas";
import { StyledHome, Content, Desc, StartBtn } from "./Home.styled";

const Home = () => {
  return (
    <StyledHome>
      <Content>
        <h2>{app_config.home.title}</h2>
        <Desc>{app_config.home.desc}</Desc>
        <StartBtn to="/movies/1">{app_config.home.btnText}</StartBtn>
      </Content>
    </StyledHome>
  );
};

export default Home;

import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import { GlobalStyle } from "./components/styled/GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);

// React
import React from "react";
import ReactDOM from "react-dom";

// Components
import App from "./pages/App";
import { GlobalStyle } from "./components/styled/GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

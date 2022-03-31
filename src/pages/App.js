import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Nav from "../components/Navbar/Nav";
import Sidebar from "../components/Sidebar/Sidebar";

// Pages
import Home from "./Home";
import Movies from "./Movies";
import Favoris from "./Favoris";
import Error from "./Error";

function App() {
  let [favoris, setFavoris] = useState(
    localStorage.getItem("favoriteMovies")
      ? JSON.parse(localStorage.getItem("favoriteMovies"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("favoriteMovies", JSON.stringify(favoris));
  }, [favoris]);

  let [isOpen, setIsOpen] = useState(false);
  function toggle() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <Router>
        <Nav toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Routes>
          <Route path="*" element={<Error />} />
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/movies/:pageIndex"
            element={<Movies favoris={favoris} setFavoris={setFavoris} />}
          />
          <Route
            exact
            path="/favoris"
            element={<Favoris favoris={favoris} setFavoris={setFavoris} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;

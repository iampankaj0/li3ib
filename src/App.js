import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./styles/scss/font.scss";
import "./styles/scss/icons.scss";
import "./App.css";
import Home from "./components/home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

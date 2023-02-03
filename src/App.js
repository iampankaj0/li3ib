import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./styles/scss/font.scss";
import "./styles/scss/icons.scss";
import "./App.css";
import Home from "./components/home/Home";
import Loader from "./reusable/Loader";
import Login from "./components/login/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/bookings" element={<Login />} />
        <Route exact path="/login" element={<Login />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

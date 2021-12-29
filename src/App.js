import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navbar.js";
import './App.css';
import Home from "./pages/home/Home.js"
import Events from "./pages/events/Events.js"
import AboutUs from "./pages/aboutUs/AboutUs.js"

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content-container">
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route element={<Home />} />
        </Routes>

        </div>

      </div>
    </Router>
  );
}

export default App;

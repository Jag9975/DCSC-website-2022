import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./Navbar.js";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content-container">
        <Navigation />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/nameHere" component={} />
          <Route component={Error} />
        </Switch>

        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

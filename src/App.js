import React, { Component } from "react";
import NavBar from "./components/NavBar/index.js";
import Router from "./components/Router/index.js";
import Footer from "./components/Footer/index.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Router />
        <Footer />
      </div>
    );
  }
}

export default App;

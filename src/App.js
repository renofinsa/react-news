import React, { Component } from "react";
import logo from "./logo.svg";
import Button from "./modules/Button";
import P from "./modules/P";
import SourceList from "./modules/sources/SourceList";
import Bahasa from "./modules/sources/Bahasa";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Bahasa />
      </div>
    );
  }
}

export default App;

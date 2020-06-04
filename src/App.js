import React, { Component } from 'react';
import Zipsearch from "./Components/Zipsearch";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="main-header">Zip Code</h1>
      <p>Zip Code: </p>
      <input type="number" placeholder="Try 10016"></input>
      <p>No Results</p>
      <Zipsearch />
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import Zipsearch from "./Components/Zipsearch";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="main-header">Zip Searcher</h1>
      <Zipsearch zip="10016"/>
    </div>
  );
}

export default App;

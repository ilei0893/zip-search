import React, { Component } from 'react';
import Zipsearch from "./Components/Zipsearch";
import './App.css';

class App extends Component{
  render() {
    return (
      <div className="Zip">
        <h1 className="main-header">Zip Searcher</h1>
          <Zipsearch zip="10016"/>
      </div>
    );
  }
}

export default App;

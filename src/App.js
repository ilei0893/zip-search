import React, { Component } from 'react';
import Zipsearch from "./Components/Zipsearch";

class App extends Component{
  render() {
    return (
      <div className="Zip">
        <h1>Zip Searcher</h1>
        <Zipsearch zip=""/>
      </div>
    );
  }
}

export default App;

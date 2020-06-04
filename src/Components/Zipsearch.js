import React, { Component } from 'react';
import axios from "axios";
import "../App.css"

class Zipsearch extends Component{
constructor(props){  
  super(props);
  this.state = {
      zip: "10016"
    };
    this.handleZipChange = this.handleZipChange.bind(this);
}

    handleZipChange(event)
    { this.setState = ({zip: event.target.zip}); }



    render() {
        return (
            <div className = "search">
                <label for="zip">Enter a zip code: </label>
                <input type="text" value={this.state.zip} onChange = {this.handleZipChange}></input>
            </div>
        );
    }
}

export default Zipsearch;
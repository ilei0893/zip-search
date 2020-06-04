import React, { Component } from 'react';
import axios from "axios";

class Zipsearch extends Component{
constructor(props){  
  super(props);
  this.state = {
      zip: "10016"
    };
}

    handleChange(event)
    {
        this.setState = ({zip: event.target.zip});
    }
    render() {
        return (
            <div className = "search">
                <label for="zip">Enter a zip code: </label>
                <input type="text" value={this.state.zip} onChange = {this.handleChange}></input>
            </div>
        );
    }
}

export default Zipsearch;
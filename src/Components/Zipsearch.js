import React, { Component } from 'react';
import axios from "axios";

class Zipsearch extends Component{
constructor(props){  
  super(props);
  this.state = {
      zip: null
    };
    this.handleZipChange = this.handleZipChange.bind(this);
  }

    handleZipChange(events){
        this.setState({
            zip: events.target.value
        });
    }
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
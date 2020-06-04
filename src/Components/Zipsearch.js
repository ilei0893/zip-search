import React, { Component } from 'react';
import axios from "axios";
import "../App.css"

class Zipsearch extends Component{
constructor(props){  
  super(props);
  this.state = {
      zip: null
    };
    this.handleZipChange = this.handleZipChange.bind(this);
<<<<<<< HEAD
  }

    handleZipChange(events){
        this.setState({
            zip: events.target.value
        });
    }
=======
}

    handleZipChange(event)
    { this.setState = ({zip: event.target.zip}); }



>>>>>>> 5570eb09f51d32327c5b30282dbd5ad84e4d4f8f
    render() {
        return (
            <div className = "search">
                <label for="zip">Enter a zip code: </label>
<<<<<<< HEAD
                <input type="text" value={this.state.zip} onChange = {this.handleZipChange}></input>
=======
                <input placeholder="Try 10016" type="text" value={this.state.zip} onChange = {this.handleZipChange}></input>
>>>>>>> 5570eb09f51d32327c5b30282dbd5ad84e4d4f8f
            </div>
        );
    }
}

export default Zipsearch;
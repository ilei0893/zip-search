import React, { Component } from 'react';
import axios from "axios";
import "../App.css"

class Zipsearch extends Component{
constructor(props){  
  super(props);
  this.state = {
      zip: ""
    };
    this.handleZipChange = this.handleZipChange.bind(this);
  }

    componentDidMount(){
        const url = "http://ctp-zip-api.herokuapp.com/zip/";
        axios.get(url + this.props.zip)
        .then((response) => {
            const data = response.data;

            for(let i = 0; i < data.length; i++)
            {
                const newZipObj = {
                    state: data[i].State,
                    location: data[i].Lat + data[i].Long,
                    population: data[i].EstimatedPopulation,
                    total: data[i].TotalWages
                };
                this.setState({zip: newZipObj});
            }
        })
        .catch((err) => console.log(err));
    }

    handleZipChange(events){
        this.setState({
            zip: events.target.value
        });
    }

    render() {
        return (
            <div className = "search">
                <label htmlFor="zip">Enter a zip code: </label>
                <input type="text" value={this.props.zip} onChange = {this.handleZipChange}></input>
            </div>
        );
    }
}

export default Zipsearch;
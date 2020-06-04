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
                    lat: data[i].Lat,
                    long: data[i].Long,
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
            <>
            <div className = "search">
                <label htmlFor="zip">Enter a zip code: </label>
                <input type="text" value={this.props.zip} onChange = {this.handleZipChange}></input>
            </div>
            <div>
                <p>
                    State: {this.state.zip.state}  <br />
                    Location: ({this.state.zip.lat} ,{this.state.zip.long} ) <br />
                    Population (estimated): {this.state.zip.population}  <br />
                    Total Wages: {this.state.zip.total} 
                </p>
            </div>
            </>
        );
    }
}

export default Zipsearch;
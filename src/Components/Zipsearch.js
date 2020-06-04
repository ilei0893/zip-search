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
        const url = `http://ctp-zip-api.herokuapp.com/zip/`
        axios
            .get(url + this.props.zip)
            .then(response => {
                const data = response.data;

                const newZipObj = {
                    city: data[0].City,
                    state: data[0].State,
                    location: data[0].Location,
                    population: data[0].EstimatedPopulation,
                    totalwages: data[0].TotalWages
                 };
                 console.log()
                 console.log(newZipObj);
                 this.setState({zip: newZipObj});
            })
            .catch((err) => console.log(err));
    }


    handleZipChange(event)
    { this.setState = ({zip: event.target.value}); }

    render() {
        return (
            <div className = "search">
                <label for="zip">Enter a zip code: </label>
                <input type="text" value={this.props.zip} onChange = {this.handleZipChange}></input>
            </div>
        );
    }
}

export default Zipsearch;
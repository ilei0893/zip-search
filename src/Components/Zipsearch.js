import React, { Component } from 'react';
import axios from "axios";
import "../App.css"

class Zipsearch extends Component{
constructor(props){  
  super(props);
  this.state = {
      zip: "10016",
      newZip: [],
    };
    this.handleZipChange = this.handleZipChange.bind(this);
  }

    // componentDidMount(){
    //     const url = "http://ctp-zip-api.herokuapp.com/zip/";
    //     axios.get(url + this.state.zip)
    //     .then((response) => {
    //         const data = response.data;
    //             const newZipObj = {
    //                 state: data[0].State,
    //                 lat: data[0].Lat,
    //                 long: data[0].Long,
    //                 population: data[0].EstimatedPopulation,
    //                 total: data[0].TotalWages
    //             }
    //             this.setState({newZip: newZipObj});
    //         }
    //     )
    //     .catch((err) => console.log(err));
    // }

    handleZipChange(events){
        this.setState({
            zip: events.target.value
        });
        const url = "http://ctp-zip-api.herokuapp.com/zip/";
        axios.get(url + events.target.value)
        .then((response) => {
            const data = response.data;
            console.log(data);
            this.setState({newZip: data});
            
        })
        .catch((err) => console.log(err));
    }

    render() {
        let display;
            display = (
            <div className = "search">
                <label htmlFor="zip">Enter a zip code: </label>
                <input type="text" value={this.state.zip} onChange = {this.handleZipChange} ></input>
            </div>
            
            );
        return (
        <div>
        <div>
            {display}
        </div>
        <div className = "zip">
            {this.state.newZip.map(city => {
                return (<div>
                    {city.LocationText}<br></br>
                    {city.State}<br></br>
                    {city.Lat}<br></br>
                    {city.Long}<br></br>
                    {city.TotalWages}<br></br>
                </div>)
            })
        }
        </div>
        </div>
        )
    }
}

export default Zipsearch;
import React, { Component } from 'react';
import axios from "axios";
import "../App.css"

class Zipsearch extends Component{
constructor(props){  
  super(props);
  this.state = {
      zip: null,
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
                <input placeholder="Try 10016" type="text" value={this.state.zip} onChange = {this.handleZipChange} ></input>
            </div>
            
            );
        return (
        <div>
        <div>
            {display}
        </div>
        <div className = "zip">
            {this.state.newZip.map(city => {
                return (
                <div className="infomration">
                    {city.LocationText}<br></br>
                    State: {city.State}<br></br>
                    Location: ({city.Lat} {city.Long})<br></br>
                    (Estimated) Population: {city.EstimatedPopulation}<br></br>
                    Total Wages:{city.TotalWages}<br></br>
                    <br></br>
                </div>)
            })
        }
        </div>
        </div>
        )
    }
}

export default Zipsearch;
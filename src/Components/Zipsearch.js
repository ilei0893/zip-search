import React, { Component } from 'react';
import axios from "axios";

class Zipsearch extends Component{
    constructor(props){
        super(props)
            this.state ={ zip: null};
    }

    componentDidMount(){
        axios
        .get("http://ctp-zip-api.herokuapp.com/zip/" + this.props.name)
        .then((respone) => {
            const data = respone.data;

            const newZipObj ={ 
                city: data.City,
                state: data.State,
                location: data.location,
                population: data.population,
                totalwages: data.TotalWages      
            }
        });
    }
    render(){
        return(
            <>
            </>
        )
    }
}
export default Zipsearch;
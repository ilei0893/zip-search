import React, { Component } from 'react';
import axios from "axios";

class Zipsearch extends Component{
    state ={ zip: null};

    componentDidMount(){
        axios
        .get("http://ctp-zip-api.herokuapp.com/zip/" + this.props.name)
        .then((respone) => {
            const data = respone.data;

            const newZipObj={
                city: data.City,
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
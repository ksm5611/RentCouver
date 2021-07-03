import React, { Component } from 'react';
import axios from 'axios';
import './Navigation.css';
import Navigation from './components/Navigation';
import Map from './components/PropertyListing/Map';
import PropertyDisplay from './components/PropertyListing/PropertyList'; 

export default function App() {

  // fetchData = () => {
  //   axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
  //     .then((response) => {
  //       // handle success
  //       console.log(response.data) // The entire response from the Rails API

  //       console.log(response.data.message) // Just the message
  //       this.setState({
  //         message: response.data.message
  //       });
  //     })
  // }


  return (
    <>
      <Navigation />
      <PropertyDisplay /> 
      <Map />
    </>
  );
}



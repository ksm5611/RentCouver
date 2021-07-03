import React, { Component } from 'react';
import axios from 'axios';
import Navigation from './components/Navigation';
<<<<<<< HEAD
import Map from './components/PropertyListing/Map';
import PropertyDisplay from './components/PropertyListing/PropertyList'; 
=======
import User from './components/User/index';

>>>>>>> 1a9e57f47f6d44a8361ca476ca86b39cacbf71a7

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
<<<<<<< HEAD
      <PropertyDisplay /> 
      <Map />
=======
      <User />
>>>>>>> 1a9e57f47f6d44a8361ca476ca86b39cacbf71a7
    </>
  );
}



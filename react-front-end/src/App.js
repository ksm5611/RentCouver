import React, { Component } from 'react';
import axios from 'axios';
import Navigation from './components/Navigation';
import User from './components/User/index';


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
      <User />
    </>
  );
}



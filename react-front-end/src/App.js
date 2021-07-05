import React, { Component, Fragment } from "react";
import Navigation from './components/Navigation';
import ApplicationForm from './components/ApplicationForm';
import ApplicationList from './components/ApplicationList';
import ApplicationReview from './components/ApplicationReview';
import Homepage from './components/Homepage';
import PropertyDetails from './components/PropertyDetails';
import PropertyListing from './components/PropertyListing';
import RefReqList from './components/RefReqList';
import RentHistory from './components/RentHistory';
import User from './components/User';

import 'react-slideshow-image/dist/styles.css'
import "./App.css";

export default function App() {

  return (
    <>
      <Navigation />
      {/* <PropertyDisplay />  */}
      {/* <Map /> */}
      {/* <User /> */}
      {/* <Homepage /> */}
      <PropertyDetails />
    </>
  );
}

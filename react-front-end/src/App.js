import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import ApplicationForm from "./components/ApplicationForm";
import ApplicationList from "./components/ApplicationList";
import ApplicationReview from "./components/ApplicationReview";
import Homepage from "./components/Homepage";
import PropertyDetails from "./components/PropertyDetails";
import PropertyListing from "./components/PropertyListing";
import RefReqList from "./components/RefReqList";
import RentHistory from "./components/RentHistory";
import User from "./components/User";

import "react-slideshow-image/dist/styles.css";
import "./App.css";

export default function App() {
  return (
    <>
      <Router>
        <Navigation />
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home">
            <User />
          </Route>
          <Route path="/properties">
            <PropertyDetails />
          </Route>
          <Route path="/applicationForm">
            <ApplicationForm propertyId={17} />
          </Route>
          <Route path="/propertyDisplay">
            <PropertyListing />
          </Route>
          <Route path="/homePage">
            <Homepage />
          </Route>
          <Route path="/applicationList">
            <ApplicationList />
          </Route>
          <Route path="/applicationReview">
            <ApplicationReview />
          </Route>
          <Route path="/rentHistory">
            <RentHistory />
          </Route>
          <Route path="/refReqList">
            <RefReqList />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

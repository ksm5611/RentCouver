import React from "react";
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
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import useToken from "./hooks/useToken";

import "react-slideshow-image/dist/styles.css";
import "./App.css";

export default function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return (
      <Router>
        <Navigation />
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login setToken={setToken} />
          </Route>
          <Route path="/home">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    );
  }

  return (
    <>
      <Router>
        <Navigation />
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/user/:tenantId">
            <User />
          </Route>
          <Route path="/property_details/:id">
            <PropertyDetails />
          </Route>
          <Route path="/applicationForm/:propertyId/:landlordId">
            <ApplicationForm />
          </Route>
          <Route path="/property_listings">
            <PropertyListing />
          </Route>
          <Route path="/home">
            <Homepage />
          </Route>
          <Route path="/app_list/:landlordId">
            <ApplicationList />
          </Route>
          <Route path="/app_review">
            <ApplicationReview />
          </Route>
          <Route path="/rent_history/:tenantId">
            <RentHistory />
          </Route>
          <Route path="/ref_request_list/:landlordId">
            <RefReqList />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

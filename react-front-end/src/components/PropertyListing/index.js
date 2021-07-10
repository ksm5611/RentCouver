import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Filters from "./Filters";
import SearchBar from "./SearchBar";
import Googlemaps from "./Map";
import PropertyListItem from "./PropertyListItem";
// import "./index.css";
import React, { memo } from "react";

// this file cannot have props because this doesn't have a parent file

export default function PropertyListing() {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState({
    property_type: null,
    // number_of_bedrooms: null,
    // number_of_bathrooms: null,
    // price: null,
  });

  // state of [filter, setFilter] will be here
  // original state = { type: "", bedrooms: null, bathrooms: null, price: null}
  // setFilter = original state
  // with useState
  // query to the back end will be here
  // send the state [filter, setFilter] down to Filters.js and each filter
  // Filters.js will setState and it will be sent up here
  // http://localhost:8000/api/propertyLists?property_type=condo&&number_of_bedrooms=2

  const updateFilter = (type) => {
    setFilter({...filter, property_type: type})
  }
  
  const query = () => {
    let result = "";
    
    if (filter.property_type !== null) {
      result = "property_type=" + filter.property_type.toLowerCase(); 
    }
    if (filter.property_type === 'All') {
      result = ''
    }
    // } 
    // if (filter.bedrooms !== null) {
    //   result = "number_of_bedrooms=" + filter.number_of_bedrooms;
    // }
    // if (filter.bathrooms !== null) {
    //   result = "number_of_bathrooms=" + filter.number_of_bathrooms;
    // }
    console.log("query result in /PropListing/index.js: ", result)
    return result;
    // return 'property_type=condo&&number_of_bedrooms=2';
  }


  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          // `http://localhost:8000/api/propertyLists`
          `http://localhost:8000/api/propertyLists?${query()}`
          // `http://localhost:8000/api/propertyLists?property_type=condo`
        );
        // you need setFilter here?
        setProperties(result.data);
      } catch (error) {
        setError("Your server is broken");
      }
    }
    fetchData();
  }, [filter.property_type]);

  return (
    <div id="proplist-container">
      <div id="search-and-filter">
        <Filters
          filteredProperties={updateFilter}
        />
        <SearchBar />
      </div>
      <div id="map-and-proplist">
        <div id="just-propList">
          <PropertyListItem
            filteredProperties={(filter) => setFilter(filter)}
            properties={properties}
          />
        </div>
        <div id="just-map">
          <Googlemaps />
        </div>
      </div>
    </div>
  );
}

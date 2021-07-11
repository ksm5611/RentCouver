import axios from "axios";
import { useEffect, useState } from "react";
import Filters from "./Filters";
import SearchBar from "./SearchBar";
import Googlemaps from "./Map";
import PropertyListItem from "./PropertyListItem";
// import "./index.css";
import React, { memo, useCallback } from "react";

// this file cannot have props because this doesn't have a parent file

export default function PropertyListing() {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState({
    property_type: null,
    number_of_bedrooms: null,
    number_of_bathrooms: null,
    minPrice: null,
    maxPrice: null
  });

  // state of [filter, setFilter] will be here
  // original state = { type: "", bedrooms: null, bathrooms: null, price: null}
  // setFilter = original state
  // with useState
  // query to the back end will be here
  // send the state [filter, setFilter] down to Filters.js and each filter
  // Filters.js will setState and it will be sent up here
  // http://localhost:8000/api/propertyLists?property_type=condo&&number_of_bedrooms=2

  const updateFilter = (type, bedrooms, bathrooms, minPrice, maxPrice) => {
    setFilter({
      ...filter,
      property_type: type,
      number_of_bedrooms: bedrooms,
      number_of_bathrooms: bathrooms,
      minPrice: minPrice,
      maxPrice: maxPrice
    });
  };

  const query = useCallback(() => {
    let result = "";
    let propertyType = "";
    let numberOfBedRoom = "";
    let numberOfBathRoom = "";
    let minPrice = 0;
    let maxPrice = 0;

    if (filter.property_type !== null) {
      propertyType = "property_type=" + filter.property_type.toLowerCase();
    }
    if (filter.number_of_bedrooms !== null) {
      numberOfBedRoom = "number_of_bedrooms=" + filter.number_of_bedrooms;
    }
    if (filter.number_of_bathrooms !== null) {
      numberOfBathRoom = "number_of_bathrooms=" + filter.number_of_bathrooms;
    }
    if (filter.property_type === "All") {
      propertyType = "";
    }
    if (filter.number_of_bedrooms === "All") {
      numberOfBedRoom = "";
    }
    if (filter.number_of_bathrooms === "All") {
      numberOfBathRoom = "";
    }

    // if (filter.minPrice === 800 ) {
    //   minPrice = 800;
    // }

    // if (filter.maxPrice === 5000 ) {
    //   minPrice = 5000;
    // }

    if (propertyType) {
      result += propertyType + "&";
    }

    if (numberOfBedRoom) {
      result += numberOfBedRoom + "&";
    }

    if (numberOfBathRoom) {
      result += numberOfBathRoom + "&";
    }

    // if (minPrice) {
    //   result += minPrice + "&";
    // }

    // if (maxPrice) {
    //   result += maxPrice + "&";
    // }

    console.log("query result in /PropListing/index.js: ", result);
    return result;
  }, [
    filter.property_type,
    filter.number_of_bedrooms,
    filter.number_of_bathrooms,
    // filter.minPrice,
    // filter.maxPrice
  ]);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          `http://localhost:8000/api/propertyLists?${query()}`
        );
        // you need setFilter here?
        setProperties(result.data);
      } catch (error) {
        setError("Your server is broken");
      }
    }
    fetchData();
  }, [query]);

  return (
    <div id="proplist-container">
      <div id="search-and-filter">
        <Filters filteredProperties={updateFilter} />
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

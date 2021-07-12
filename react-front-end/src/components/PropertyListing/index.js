import axios from "axios";
import { useEffect, useState } from "react";
import Filters from "./Filters";
import SearchBar from "./SearchBar";
import Googlemaps from "./Map";
import PropertyListItem from "./PropertyListItem";
// import "./index.css";
import React, { memo, useCallback } from "react";

// this file cannot have props because this doesn't have a parent file
// cost_of_month_lt = lower than, gt = greater than

export default function PropertyListing() {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState({
    property_type: null,
    number_of_bedrooms: null,
    number_of_bathrooms: null,
    cost_of_month_lt: null,
    cost_of_month_gt: null
  });

  // state of [filter, setFilter] will be here
  // original state = { type: "", bedrooms: null, bathrooms: null, price: null}
  // setFilter = original state
  // with useState
  // query to the back end will be here
  // send the state [filter, setFilter] down to Filters.js and each filter
  // Filters.js will setState and it will be sent up here
  // http://localhost:8000/api/propertyLists?property_type=condo&&number_of_bedrooms=2
  // http://localhost:8000/api/propertyLists?cost_of_month_lt=2000

  const updateFilter = (type, bedrooms, bathrooms, minPrice, maxPrice) => {
    setFilter({
      ...filter,
      property_type: type,
      // number_of_bedrooms: bedrooms,
      // number_of_bathrooms: bathrooms,
      cost_of_month_lt: maxPrice,
      cost_of_month_gt: minPrice
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
    // if (filter.number_of_bedrooms !== null) {
    //   numberOfBedRoom = "number_of_bedrooms=" + filter.number_of_bedrooms;
    // }
    // if (filter.number_of_bathrooms !== null) {
    //   numberOfBathRoom = "number_of_bathrooms=" + filter.number_of_bathrooms;
    // }
    if (filter.cost_of_month_gt !== null ) {
      minPrice = filter.cost_of_month_gt;
    }

    if (filter.cost_of_month_lt !== null ) {
      maxPrice = filter.cost_of_month_lt;
    }


    if (filter.property_type === "All") {
      propertyType = "";
    }
    // if (filter.number_of_bedrooms === "All") {
    //   numberOfBedRoom = "";
    // }
    // if (filter.number_of_bathrooms === "All") {
    //   numberOfBathRoom = "";
    // }


    if (propertyType) {
      result += propertyType + "&";
    }

    // if (numberOfBedRoom) {
    //   result += numberOfBedRoom + "&";
    // }

    // if (numberOfBathRoom) {
    //   result += numberOfBathRoom + "&";
    // }

    if (minPrice) {
      result += minPrice + "&";
    }

    if (maxPrice) {
      result += maxPrice + "&";
    }

    console.log("query result in /PropListing/index.js: ", result);
    return result;
  }, [
    filter.property_type,
    // filter.number_of_bedrooms,
    // filter.number_of_bathrooms,
    filter.cost_of_month_lt,
    filter.cost_of_month_gt
  ]);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          `http://localhost:8000/api/propertyLists?${query()}`
        );
        console.log("result.data PropListing/index.js: ", result.data);
        setProperties(result.data);
      } catch (error) {
        setError("Your server is broken");
      }
    }
    fetchData();
  }, [query]);

  return (
    <div id="proplist-container" className="wrapper">
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

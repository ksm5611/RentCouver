import axios from "axios";
import { useEffect, useState } from "react";
import Filters from "./Filters";
import MyComponent from "./Map";
import PropertyListItem from "./PropertyListItem";
import "./index.css";
import React, { memo } from "react";

// this file cannot have props because this doesn't have a parent file

export default function PropertyListing() {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState({ property_type: "", bedrooms: null, bathrooms: null, price: null });

  // state of [filter, setFilter] will be here
  // original state = { type: "", bedrooms: null, bathrooms: null, price: null}
  // setFilter = original state
  // with useState
  // query to the back end will be here
  // send the state [filter, setFilter] down to Filters.js and each filter
  // Filters.js will setState and it will be sent up here

  // const query = (filter) => {
  //   // this props will be from Filters.js
  //   // props are the filter selections
  //   result = "";
  //   if (filter.property_type !== null) {
  //     result = "type=" + property_type;
  //   }
  //   if (filter.bedrooms !== null) {
  //     result = "bedrooms=" + number_of_bedrooms;
  //   }
  //   if (filter.bathrooms !== null) {
  //     result = "bathrooms=" + number_of_bathrooms;
  //   }

  // }

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          // `http://localhost:8000/api/propertyLists?${query}`
          `http://localhost:8000/api/propertyLists`
        );
        setProperties(result.data);
      } catch (error) {
        setError("Your server is broken");
      }
    }
    fetchData();
  }, []);

  return (
    <div id="proplist-container">
      <Filters
        // filteredProperties={filter => setFilter(filter)}
      />
      <div id="map-and-proplist">
        <PropertyListItem
          properties={properties}
        />
        <MyComponent />
      </div>
    </div>
  );
}

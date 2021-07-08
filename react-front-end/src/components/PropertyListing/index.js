import axios from "axios";
import { useEffect, useState } from "react";
import Filters from "./Filters";
import MyComponent from "./Map";
import PropertyListItem from "./PropertyListItem";
import "./index.css";
import React, { memo } from "react";

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

  // const query = (props) => {
  //   // this props will be from Filters.js
  //   // props are the filter selections
  //   result = "";
  //   if (props.property_type !== null) {
  //     result = "type=" + property_type;
  //   }
  //   if (props.number_of_bedrooms !== null) {
  //     result = "bedrooms=" + number_of_bedrooms;
  //   }
  //   if (number_of_bathrooms !== null) {
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
      <Filters />
      <div id="map-and-proplist">
        <PropertyListItem
          // filteredProperties={filter => setFilter(filter)}
          properties={properties}
        />
        <MyComponent />
      </div>
    </div>
  );
}

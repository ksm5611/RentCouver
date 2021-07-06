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

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          "http://localhost:8000/api/propertyLists"
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
        <PropertyListItem properties={properties} />
        <MyComponent />
      </div>
    </div>
  );
}

import axios from "axios";
import { useEffect, useState } from "react";
import Filters from "./Filters";
import SearchBar from "./SearchBar";
import Googlemaps from "./Map";
import PropertyListItem from "./PropertyListItem";
import React, { useCallback } from "react";

export default function PropertyListing() {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState({
    property_type: null,
    number_of_bedrooms: null,
    number_of_bathrooms: null,
    cost_of_month_lt: null,
    cost_of_month_gt: null,
    pets_allowed: null,
  });

  // update filter function
  const updateFilter = (type, bedrooms, bathrooms, minPrice, maxPrice) => {
    setFilter({
      ...filter,
      property_type: type,
      number_of_bedrooms: bedrooms,
      number_of_bathrooms: bathrooms,
      cost_of_month_lt: maxPrice,
      cost_of_month_gt: minPrice,
    });
  };

  // filter selections
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
    if (filter.cost_of_month_gt !== null) {
      minPrice = filter.cost_of_month_gt;
    }
    if (filter.cost_of_month_lt !== null) {
      maxPrice = filter.cost_of_month_lt;
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
    if (propertyType) {
      result += propertyType + "&";
    }
    if (numberOfBedRoom) {
      result += numberOfBedRoom + "&";
    }
    if (numberOfBathRoom) {
      result += numberOfBathRoom + "&";
    }
    if (minPrice) {
      result += minPrice + "&";
    }
    if (maxPrice) {
      result += maxPrice + "&";
    }
    return result;
  }, [
    filter.property_type,
    filter.number_of_bedrooms,
    filter.number_of_bathrooms,
    filter.cost_of_month_lt,
    filter.cost_of_month_gt
  ]);

  // fetch filtered data
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          `http://localhost:8000/api/propertyLists?${query()}`
        );
        setProperties(result.data);
      } catch (error) {
        setError("Your server is broken");
      }
    }
    fetchData();
  }, [query]);

  return (
    <div className="prop-list-wrapper">
      <div className="prop-list-page-container">

        <div className="search-and-filter">
          <Filters filteredProperties={updateFilter} />
          <SearchBar />
        </div>
        <div className="map-and-proplist">
          <div className="prop-list-container">
            <PropertyListItem
              filteredProperties={(filter) => setFilter(filter)}
              properties={properties}
            />
          </div>
        </div>

      </div>
      <div className="map-container">
        <Googlemaps />
      </div>
    </div>
  );
}

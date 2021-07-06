import Filters from "./Filters";
import MyComponent from "./Map";
import PropertyListItem from "./PropertyListItem";
import './index.css';
import React, { memo } from 'react';

export default function PropertyListing () {

  return (
    <div id='proplist-container'>
      <Filters />
      <div id='map-and-proplist'>
        <PropertyListItem />
        <MyComponent />
      </div>
    </div>
  )

}
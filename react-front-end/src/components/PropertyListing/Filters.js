import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import PriceSlider from './PriceSlider';
import Divider from '@material-ui/core/Divider';
import FilterType from './FilterType';
import FilterBedroom from './FilterBedroom';
import FilterBathroom from './FilterBathroom';
import FilterChecklist from './FilterChecklist';
import './Filters.css';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function Filters () {

  const classes = useStyles();
  
  // for the drawer
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // const [ selectedIndex, setSelectedIndex ] = React.useState(0)...?

  // insides of the drawer
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, true)}
    >
      <List>

        <PriceSlider />

        <FilterType 
          // pass the selected text or index??
        />

        <FilterBedroom />

        <FilterBathroom />

      </List>

      <Divider />

      <List>

        <FilterChecklist />

      </List>
    </div>
  );



  // search button
  // the search button will redirect the user to a URL which has the new params for the filter
  // /property_listings/filter?type=condo&&bedrooms=2&&bathrooms=2
  // the search URL is set in PropertyListItem.js
  // then in the back end, access the URL through req.params
  // then express should pass in the req.params back to the ReactJS
  // set the values using useEffect hook to toggle the drawer and change the URL at the same time


  //this query will go into onClick for the search button
  // const query = (props) => {
  //   // this props will be from Filters.js
  //   // props are the filter selections
  //   if (props.property_type !== null) {
  //     // the search button in Filters.js {"type=" + property_type}
  //   }
  //   if (props.number_of_bedrooms !== null) {
  //     // the search button in Filters.js {"number_of_bedrooms=" + number_of_bedrooms}
  //   }
  //   if (number_of_bathrooms !== null) {
  //     // the search button in Filters.js {"number_of_bathrooms=" + number_of_bathrooms}
  //   }

  // }


  return (
    <div id="proplist_top">

      <div className="filters">
        <Button
          id="btn-outline-primary"
          variant="outline-primary"
          onClick={toggleDrawer("left", true)}>
          Filters
        </Button>

        <Drawer
          style={{ width:'220px' }}
          variant="temporary"
          anchor="left"
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          >
          {list("left")}

          <Button
            // use a Router then a Link to={query_type + query_bedrooms + query_bathrooms} so the app doesn't refresh and lose the state
            id="btn-outline-primary"
            variant="outline-primary"
            // value=take the child info in {}, then put this in the onClick into a setState(value)
            onClick={
              // {searchClick},
              // () => onClick(query),
              // make a function to take the state from the FilterType.js
              toggleDrawer("left", false) /*-- this will probably be in useEffect*/
            }
          >
            Search
          </Button>

        </Drawer>
      
      </div>

    </div>
  )

}
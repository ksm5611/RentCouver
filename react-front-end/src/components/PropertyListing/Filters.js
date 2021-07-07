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

  // const []

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
          // selected={selectedIndex}
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
  // set the values using useEffect hook



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
            // href=""
            id="btn-outline-primary"
            variant="outline-primary"
            onClick={
              // onClick={searchClick},
              // onClick={() => onClick(query)},
              toggleDrawer("left", false)
            }
          >
            Search
          </Button>

        </Drawer>
      
      </div>

    </div>
  )

}
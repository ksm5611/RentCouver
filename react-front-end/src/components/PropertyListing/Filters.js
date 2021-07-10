import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Button } from 'react-bootstrap';
// import { Drawer } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
// import List from '@material-ui/core/List';
import PriceSlider from './PriceSlider';
// import Divider from '@material-ui/core/Divider';
import FilterType from './FilterType';
import FilterBedroom from './FilterBedroom';
import FilterBathroom from './FilterBathroom';
import FilterChecklist from './FilterChecklist';
import {
  Button,
  Drawer,
  Divider,
  makeStyles,
  List
} from "@material-ui/core";
// import './Filters.css';

const useStyles = makeStyles({
  root: {
    backgroundColor: "#c1b9b9",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function Filters(props) {

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

  // for  <Filtertype />
  const [ type, setType ] = useState('All');

  // const [filter, setFilter] = useState({
  //   property_type: null,
  //   number_of_bedrooms: null,
  //   number_of_bathrooms: null,
  //   price: null,
  // });



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
          changeType={type => setType(type)}
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
  //  http://localhost:8000/api/propertyLists?property_type=condo&&number_of_bedrooms=2
  // the search URL is set in PropertyListItem.js
  // then in the back end, access the URL through req.params
  // then express should pass in the req.params back to the ReactJS
  // set the values using useEffect hook to toggle the drawer and change the URL at the same time

  



  return (
    <div id="proplist_top">

      <div className="filters">
        <Button
          // variant="contained"
          // color="secondary"
          // id="btn-outline-primary"
          className={classes.root}
          // variant="outline-primary"
          onClick={toggleDrawer("left", true)}>
          Filters
        </Button>

        <Drawer
          style={{ width: '220px' }}
          variant="temporary"
          anchor="left"
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}

          <Button
            // variant="contained"
            // color="secondary"
            // use a Router then a Link to={query_type + query_bedrooms + query_bathrooms} so the app doesn't refresh and lose the state
            // id="btn-outline-primary"
            className={classes.root}
            // variant="outline-primary"
            // value=take the child info in {}, then put this in the onClick into a setState(value)
            onClick={() => {
              // console.log("type in Filters.js: ", type)
              props.filteredProperties(type);
              toggleDrawer("left", false) }
            }
          >
            Search
          </Button>

        </Drawer>

      </div>

    </div>
  )

}
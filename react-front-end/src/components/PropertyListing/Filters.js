import React, { useState } from "react";
// import { Button } from 'react-bootstrap';
// import { Drawer } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import clsx from "clsx";
// import List from '@material-ui/core/List';
import PriceSlider from "./PriceSlider";
// import Divider from '@material-ui/core/Divider';
import FilterType from "./FilterType";
import FilterBedroom from "./FilterBedroom";
import FilterBathroom from "./FilterBathroom";
import FilterChecklist from "./FilterChecklist";
import { Button, Drawer, Divider, makeStyles, List } from "@material-ui/core";
// import './Filters.css';

const useStyles = makeStyles({
  root: {
    backgroundColor: "#c1b9b9",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
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
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // for  <Filtertype />
  const [type, setType] = useState("All");

  // for <FilterBedroom />
  const [bedrooms, setBedrooms] = useState("All");

  // for <FilterBathroom />
  const [bathrooms, setBathrooms] = useState("All");

  // for <PriceSlider />
  const [minPrice, setMinPrice] = useState(800);
  const [maxPrice, setMaxPrice] = useState(3000); 

  // insides of the drawer
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, true)}
    >
      <List>
        <PriceSlider 
          changeMaxPrice={(max) => setMaxPrice(max)}
          changeMinPrice={(min) => setMinPrice(min)}
        />

        <FilterType changeType={(type) => setType(type)} />

        <FilterBedroom changeBedroom={(bedrooms) => setBedrooms(bedrooms)} />

        <FilterBathroom
          changeBathroom={(bathrooms) => setBathrooms(bathrooms)}
        />
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
        <button
          // variant="contained"
          // color="secondary"
          // id="btn-outline-primary"
          // className={classes.root}
          // variant="outline-primary"
          className="button secondary-btn"
          onClick={toggleDrawer("left", true)}
        >
          Filters
        </button>

        <Drawer
          style={{ width: "220px" }}
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
              toggleDrawer("left", false);
              props.filteredProperties(type, bedrooms, bathrooms, minPrice, maxPrice);
            }}
          >
            Search
          </Button>
        </Drawer>
      </div>
    </div>
  );
}

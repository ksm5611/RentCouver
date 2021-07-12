import axios from "axios";
import { useEffect, useState } from "react";
import { Button, ListItemText } from "@material-ui/core";
import Fade from 'react-reveal/Fade';
import clsx from "clsx";
import {
  List,
  Container,
  ListItem,
  makeStyles,
  Avatar,
} from "@material-ui/core";

import React from "react";
import { Drawer } from "@material-ui/core";

const useStyles = makeStyles({
  list: {
    width: 700,
  },
  fullList: {
    width: "auto",
  },
  btn: {
    backgroundColor: "#f1a177",
    color: "white",

    "&:hover": {
      backgroundColor: "rgb(7, 177, 77, 0.42)",
    },
  },
});

export default function ApplicationReview({ tenantId }) {
  const [user, setUser] = useState(null);
  const [rentHistories, setRentHistories] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          `http://localhost:8000/api/applications/${tenantId}`
        );
        const { RentHistories: rentHistoryData, ...userData } = result.data;
        console.log("reference", result.data);
        setUser(userData);
        setRentHistories(rentHistoryData);
      } catch (error) {
        setError("Your server is broken");
      }
    }
    fetchData();
  }, [tenantId]);

  const classes = useStyles();

  // for the drawer
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const userInfo = [
    { label: "Name", value: "name" },
    { label: "Current address", value: "current_address" },
    { label: "Job title", value: "job_title" },
    { label: "Annual income", value: "annual_income" },
    { label: "Other Household Occupants", value: "other_household_occupants" },
    { label: "Contact email", value: "email" },
  ];

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  //to show residential history period
  const formatRentHistoryPeriod = (rentHistory) => {
    return `${rentHistory.start_date} - ${rentHistory.end_date}`;
  };

  //to show residential history address
  const formatAddressFromProperty = (property) => {
    return `${property.street}, ${property.city}, ${property.province} ${property.postal_code}`;
  };

  //rendering two parts of rent history values
  const renderRentHistory = (rentHistory) => {
    return (
      <List className={classes.root}>
        <ListItemText
          primary="Address"
          secondary={formatAddressFromProperty(rentHistory.Property)}
        />
        <ListItemText
          primary="Period"
          secondary={formatRentHistoryPeriod(rentHistory)}
        />
      </List>
    );
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, true)}
      id="drawer-container"
    >
      <div className="drawer-content">
        <List>
          <div className="app-review-avatar"><Avatar className="avatar-img" src={user.profile_picture_url} /></div>
          <Fade bottom cascade>
            {userInfo.map((info) => (
              <List className={classes.root}>
                <div className="appliaction-user-info app-review-info">
                  <span className="app-review-label">{info.label} :</span>
                  <p>{user[info.value]}</p>
                </div>
              </List>
            ))}
            <List>
              <h5>Rent history</h5>
              {rentHistories.map((history) => {
                return <p className="app-review-info">{renderRentHistory(history)}</p>;
              })}
            </List>
            <List>
            <h5>References</h5>
            {rentHistories.map((review) => {
              return (
                <div className="app-review-info">
                  <p>Landlord name: &nbsp; {review.Property.User.name}</p>
                  <p>{review.Property.User.email}</p>
                  <p>{review.review_content}</p>
                </div>
              );
            })}
            </List>
          </Fade>
          <button className="button primary-btn contact-btn">Contact tenant</button>
        </List>
      </div>
    </div>
  );

  if (!user) {
    return <div>Loading..</div>;
  }

  return (
    <div>
      <button
        className="primary-btn button action-button dual-buttons"
        onClick={toggleDrawer("left", true)}
      >
        Review Application
        </button>

      <Drawer
        className="drawer"
        style={{ width: "640px" }}
        variant="temporary"
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </div>
  );
}

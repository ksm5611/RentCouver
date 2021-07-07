import axios from "axios";
import { useEffect, useState } from "react";
import { Button, ListItemText } from "@material-ui/core";
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

import Divider from "@material-ui/core/Divider";

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

export default function Filters({ tenantId }) {
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
          <Avatar src={user.profile_picture_url} />
          <ListItem>Name: {user.name}</ListItem>
          <ListItem>Current address: {user.current_address}</ListItem>
          <ListItem>Job title: {user.job_title}</ListItem>
          <ListItem>Annual income: {user.annual_income}</ListItem>
          <ListItem>
            Other Household Occupants: {user.other_household_occupants}
          </ListItem>
          <ListItem>Contact email: {user.email}</ListItem>
          <List>
            {rentHistories.map((history) => {
              return <ListItem>{renderRentHistory(history)}</ListItem>;
            })}
          </List>
          <List>
            <ListItem>References</ListItem>
            {/* 그 전 집주인이 남긴 ref? */}
          </List>
          <Button className={classes.btn}>Contact tenant</Button>
        </List>
      </div>
    </div>
  );

  if (!user) {
    return <div>Loading..</div>;
  }

  return (
    <div id="proplist_top">
      <div>
        <Button
          className={classes.btn}
          variant="outline-primary"
          onClick={toggleDrawer("left", true)}
        >
          Review Application
        </Button>

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
    </div>
  );
}

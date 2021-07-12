import axios from "axios";
import { useEffect, useState } from "react";
import { Button, ListItemText } from "@material-ui/core";
import clsx from "clsx";
import Fade from 'react-reveal/Fade';
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
    maxWidth: 700,
  },
  btn: {
    backgroundColor: "#f1a177",
    color: "white",

    "&:hover": {
      backgroundColor: "rgb(7, 177, 77, 0.42)",
    },
  },
});

export default function ReceivedRef({ reference }) {
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

  // if (!reference) {
  //   return <div>Loading..</div>;
  // }

  const list = (anchor) => {
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
        {/* <Fade bottom cascade> */}
          <List>
            {/* <p className={classes.list}>{references}</p> */}
            <button className="button primary-btn contact-btn">Contact tenant</button>
          </List>
        {/* </Fade> */}
      </div>
    </div>
  }

  return (
    <div>
      <button
        className="secondary-btn button action-button"
        onClick={toggleDrawer("left", true)}
      >
        REVIEW REFERENCE
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
        {/* {reference} */}

      </Drawer>
    </div>
  );
}

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

  return (
    <div>
      <button
        className="button action-btn"
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
        {/* {reviewContent("left")} */}
        <p>{reference}</p>
      </Drawer>
    </div>
  );
}

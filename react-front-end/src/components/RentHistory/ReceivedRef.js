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

export default function ReceivedRef({ tenantId }) { // tenantId = 10?
  const [receivedRef, setReceivedRef] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        // get request for received ref
        const result = await axios.get(
          `/`
        );
        setReceivedRef(result.data);
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
        
      </div>
    </div>
  );

  if (!receivedRef) {
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
          Review Reference
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

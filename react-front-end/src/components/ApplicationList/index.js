import axios from "axios";
// import ApplicationReview from "../ApplicationReview";
// import useVisualMode from '../RefReqList/RefReqItem/useVisualMode';
import Status from "../ApplicationList/Status";
import { useEffect, useState } from "react";

import {
  Container,
  ListItem,
  List,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      border: "1px solid black",
      marginBottom: "16px",
      display: "flex",
      justifyContent: "space-between",
    },
    "& > *": {
      margin: theme.spacing(1),
    },
    btn: {
      backgroundColor: "#f1a177",
      color: "white",

      "&:hover": {
        backgroundColor: "rgb(7, 177, 77, 0.42)",
      },
    },
  };
});

export default function ApplicationList() {
  const [appLists, setAppLists] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get("http://localhost:8000/api/appList/1");
        setAppLists(result.data);
      } catch (error) {
        setError("Your server is broken");
      }
    }
    fetchData();
  }, []);

  //material ui styling funtion
  const classes = useStyles();

  // const handleDecline = async (applicationId) => {
  //   await axios.post(`http://localhost:8000/api/appList/${applicationId}`);
  // };

  return (
    <div>
      <section className="hero-container second-hero-container">
        <div>
          <h2>Received Applications</h2>
        </div>
      </section>
      <Container>
        {/* <Typography variant="h4">Tenant name Address</Typography> */}
        <ListItem className={classes.root} id="listitem-head">
          <div className="req-info head">
            <h5>Tenant's name</h5>
            <h5>Property Address</h5>
          </div>
        </ListItem>
        <List>
          {appLists.reverse().map((listValue) => {

            return (
              <ListItem className={classes.root}>
                <Status listValue={listValue} />
              </ListItem>
            );
          })}
        </List>
      </Container>
    </div>
  );
}

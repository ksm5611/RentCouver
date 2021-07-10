import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  ListItem,
  List,
  makeStyles
} from "@material-ui/core";

import RefStatus from './RefStatus';


const useStyles = makeStyles((theme) => {
  return {
    root: {
      border: "1px solid black",
      marginBottom: "16px",
      display: "flex",
      justifyContent: "space-between",
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

export default function RentHistory() {
  const classes = useStyles();

  const [history, setHistory] = useState([]);
  const [error, setError] = useState(false);

  let { tenantId } = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          `http://localhost:8000/api/rentHistories/${tenantId}`
        );
        setHistory(result.data);
      } catch (error) {
        setError("Your server is broken");
      }
    }
    fetchData();
  }, [tenantId]);

  return (
    <div>
      <section className="hero-container second-hero-container">
        <div>
          <h2>My Rent History</h2>
        </div>
      </section>
      <Container>
        {error && <div>Error Loading data</div>}
        <ListItem className={classes.root} id="listitem-head">
          <div className="rent-history-info">
            <h5 className="rent-historty-address">Property Address</h5>
            <h5>Rent Period</h5>
            <h5>Owner Name</h5>
          </div>
        </ListItem>
        <List>
          {history.reverse().map((record) => {
            return (
              <ListItem className={classes.root}>
                <RefStatus record={record} />
              </ListItem>
            );
          })}
        </List>
      </Container>
    </div>
  );
}

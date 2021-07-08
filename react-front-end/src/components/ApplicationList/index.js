import axios from "axios";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import {
  Container,
  ListItem,
  ListItemText,
  List,
  Typography,
  Button,
  TextField,
  makeStyles,
  Avatar,
} from "@material-ui/core";

import ApplicationReview from "../ApplicationReview";
import useVisualMode from "../RefReqList/RefReqItem/useVisualMode";

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

  const DEFAULT = "DEFAULT";
  const DECLINED = "DECLINED";
  const { mode, transition } = useVisualMode(DEFAULT);

  // let { landlordId } = useParams();
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

  //decline button function
  const declineApp = async (appID) => {
    await axios.post(`http://localhost:8000/api/appList/${appID}`);
    transition(DECLINED);
  };

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
          {appLists.map((listValue) => {
            return (
              <ListItem className={classes.root}>
                <div className="req-info">
                  <Avatar src={listValue.tenant.profile_picture_url} />
                  <p className="req-tenant">{listValue.tenant.name}</p>
                  <p className="req-tenant address">
                    {listValue.Property.street}
                    {listValue.Property.unit}
                    {listValue.Property.city}
                    {listValue.Property.provice}
                    {listValue.Property.postal_code}
                  </p>
                </div>
                <div className="option-btn">
                  <ApplicationReview tenantId={listValue.tenant_id} />
                  {mode === DEFAULT &&
                    (listValue.is_decline === false ? (
                      <Button
                        className={classes.btn}
                        variant="contained"
                        color="secondary"
                        onClick={() => {
                          declineApp(listValue.id);
                        }}
                      >
                        Decline
                      </Button>
                    ) : (
                      <p>DECLINED</p>
                    ))}
                  {mode === DECLINED && <p>DECLINED</p>}
                </div>
              </ListItem>
            );
          })}
        </List>
      </Container>
    </div>
  );
}

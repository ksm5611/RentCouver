import axios from "axios";
import useVisualMode from './RefReqItem/useVisualMode';
import RefReqItem from './RefReqItem/index';
import {
  Container,
  ListItem,
  List,
  makeStyles,
  Button
} from "@material-ui/core";
import '../../App.css';
import { useEffect, setError, useState, useParams } from 'react';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      border: "1px solid black",
      marginBottom: "16px",
      display: "flex",
      justifyContent: "space-between"
    },
    "& > *": {
      margin: theme.spacing(1),
    },
  };
});


export default function ReqRefList() {

  const [refReqList, setRefReqList] = useState([]);
    
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(`http://localhost:8000/api/refRequest/5`);
        setRefReqList(result.data);
      } catch (error) {
        setError("Your server is broken");
      }
    }
    fetchData();
  }, []);

  const RefList = refReqList.map((record) => {
    return (

      <ListItem className={classes.root}>
        {/* <Address /> */}
        <div className="history-info">
          <p className="req-landlord address"></p>
          <span>{record.Property.User.name}</span>
        </div>
        <div className="option-btn">
          <Button className={classes.btn} variant="contained">Request Reference</Button>
        </div>
      </ListItem>

    )
  })


  //material ui styling funtion
  const classes = useStyles();

  return (
    <div>
      <section className="hero-container second-hero-container">
        <div>
          <h2>Reference Requests</h2>
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
        <List className={classes.root}>
          <RefReqItem />
        </List>
      </Container>

    </div>
  )
}
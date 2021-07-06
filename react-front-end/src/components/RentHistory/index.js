import axios from 'axios';
import { useState, useEffect } from 'react';
import {
  Container,
  ListItem,
  List,
  Button,
  makeStyles,
  Avatar
} from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      border: "1px solid black",
      marginBottom: "16px",
      display: "flex",
      justifyContent: "space-between"      
    },
    btn: {
      backgroundColor: '#f1a177',
      color: 'white',
      "&:hover": {
        backgroundColor: 'rgb(7, 177, 77, 0.42)'
      }
    }
  };
});

export default function RentHistory () {

  const classes = useStyles();

  const [user, setUser] = useState(null);
  const [properties, setProperty] = useState();
  const [rentHistories, setRentHistories] = useState([]);
  const [error, setError] = useState("");

  const propertyInfo = [
    {value: "street"},
    {value: "unit"},
    {value: "city"},
    {value: "province"},
    {value: "postal_code"}    
  ]

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          "http://localhost:8000/api/rentHistories"
        );
        const { Property: propertyData, ...rentHistoryData} = result.data;

        setProperty(propertyData);
        setRentHistories(rentHistoryData);
        // setUser(userData);
      } catch (error) {
        setError("Your server is broken");
      }
    }
    fetchData();
  }, []);

  if (!rentHistories) {
    return <div>Loading..</div>;
  }


  return (
    <div>
      <section className="hero-container second-hero-container">
        <div>
          <h2>My Rent History</h2>
        </div>
      </section>
      <Container>

        <List>

          <ListItem className={classes.root}>
            <div className="history-info">
              <p className="req-tenant address">{rentHistories.start_date}</p>
              <p className="req-tenant">Start date - End date</p>
              <span>Landlord Name</span>
            </div>
            <div className="option-btn">
              <Button className={classes.btn} variant="contained">Request for reference from prev landlord</Button>
            </div>
          </ListItem>

        </List>
      </Container>

    </div>
  )

}
import axios from "axios";
import { useEffect, useState } from "react";
import {
  ListItem,
  ListItemText,
  List,
  Container,
  Typography,
  makeStyles,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";

//material ui styling funtion
const useStyles = makeStyles(() => {
  return {
    root: {
      border: "1px solid black",
      marginBottom: "16px",
    },
  };
});

export default function ApplicationForm() {
  const classes = useStyles();
  const [user, setUser] = useState(null);
  const [rentHistories, setRentHistories] = useState([]);

  //labeling user's info function
  const userInfo = [
    { label: "Name", value: "name" },
    { label: "Current address", value: "current_address" },
    { label: "Job title", value: "job_title" },
    { label: "Annual income", value: "annual_income" },
    { label: "Other Household Occupants", value: "other_household_occupants" },
    { label: "Email address", value: "email" },
  ];

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          "http://localhost:8000/api/applications/10"
        );
        const { RentHistories: rentHistoryData, ...userData } = result.data;
        setUser(userData);
        setRentHistories(rentHistoryData);
        console.log(rentHistoryData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const renderUserData = () => {
    return (
      <List>
        <ListItem className={classes.root}>
          <ListItemAvatar>
            <Avatar src={user.profile_picture_url} />
          </ListItemAvatar>
        </ListItem>
        {userInfo.map((info) => (
          <ListItem key={info.value} className={classes.root}>
            <ListItemText primary={info.label} secondary={user[info.value]} />
          </ListItem>
        ))}
      </List>
    );
  };

  const renderRentHistory = (rentHistory) => {
    return (
      <List className={classes.root}>
        <ListItem>
          <ListItemText
            primary="Address"
            secondary={formatAddressFromProperty(rentHistory.Property)}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Period"
            secondary={formatRentHistoryPeriod(rentHistory)}
          />
        </ListItem>
      </List>
    );
  };

  const formatRentHistoryPeriod = (rentHistory) => {
    return `${rentHistory.start_date} - ${rentHistory.end_date}`;
  };

  const formatAddressFromProperty = (property) => {
    return `${property.street}, ${property.city}, ${property.province} ${property.postal_code}`;
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4">About yourself</Typography>

      {user && renderUserData()}
      {rentHistories.length > 0 && (
        <>
          <Typography>Residential history</Typography>
          {rentHistories.map((history) => renderRentHistory(history))}
        </>
      )}
    </Container>
  );
}

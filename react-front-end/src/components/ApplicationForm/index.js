import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ListItem,
  ListItemText,
  List,
  Container,
  Typography,
  makeStyles,
  ListItemAvatar,
  Avatar,
  Button,
  TextField,
} from "@material-ui/core";

//material ui styling funtion
const useStyles = makeStyles((theme) => {
  return {
    root: {
      border: "1px solid black",
      marginBottom: "16px",
    },
    "& > *": {
      margin: theme.spacing(1),
    },
  };
});

export default function ApplicationForm() {
  const classes = useStyles();
  const [user, setUser] = useState(null);
  const [rentHistories, setRentHistories] = useState([]);
  const [error, setError] = useState("");
  const [potentialMoveInDate, setPotentailDate] = useState(null);

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
    setPotentailDate(formateDefaultDate());
  }, []);
  //property detail에서 클릭후 url로 갈때 필요한 propertyid랑 landlordid 찾기
  let { propertyId, landlordId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          `http://localhost:8000/api/applications/10`
        );
        const { RentHistories: rentHistoryData, ...userData } = result.data;
        setUser(userData);
        setRentHistories(rentHistoryData);
      } catch (error) {
        setError("Your server is broken");
      }
    }
    fetchData();
  }, []);

  //function for rendering user data
  const renderUserData = () => {
    return (
      <List>
        <ListItem className={classes.root}>
          <ListItemAvatar>
            <Avatar src={user.profile_picture_url} />
            <ListItem>{landlordId.name}</ListItem>
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

  //to show residential history period
  const formatRentHistoryPeriod = (rentHistory) => {
    return `${rentHistory.start_date} - ${rentHistory.end_date}`;
  };
  //to show residential history address
  const formatAddressFromProperty = (property) => {
    return `${property.street}, ${property.city}, ${property.province} ${property.postal_code}`;
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

  const handleSubmit = async () => {
    await axios.post("http://localhost:8000/api/applications", {
      tenant_id: 10,
      property_id: propertyId,
      landlord_id: landlordId,
      potential_move_in_date: potentialMoveInDate,
    });
  };

  // setting date funtion
  const formateDefaultDate = () => {
    const date = new Date();
    let month = "" + (date.getMonth() + 1);
    let day = "" + date.getDate();
    const year = date.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [year, month, day].join("-");
  };

  // change date funtion
  const onChangeDate = (event) => {
    setPotentailDate(event.target.value);
  };
  if (error) {
    return <Container maxWidth="md">{error}</Container>;
  }

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
      <div>
        <TextField
          label="Potential Move-in date"
          type="date"
          value={potentialMoveInDate}
          onChange={onChangeDate}
        />
      </div>

      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Send
      </Button>
      <Button variant="contained" color="secondary">
        cancel
      </Button>
    </Container>
  );
}

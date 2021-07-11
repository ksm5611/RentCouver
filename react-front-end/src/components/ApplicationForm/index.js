import useVisualMode from "../RefReqList/RefReqItem/useVisualMode";
import axios from "axios";

import { useHistory } from "react-router-dom";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ListItem,
  ListItemText,
  List,
  div,
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
      border: "1px solid #574f4a",
      borderRadius: 4,
      marginBottom: "16px",
      padding: '1rem'
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

  // modes for buttons
  const DEFAULT = "DEFAULT";
  const SENT = "SENT";
  // const { mode, transition } = useVisualMode(DEFAULT);
  const [mode, setMode] = useState(DEFAULT);

  // go back to previous property page
  const history = useHistory();

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
          "http://localhost:8000/api/applications/11"
        );
        const { RentHistories: rentHistoryData, ...userData } = result.data;
        setUser(userData);
        console.log(result.data)
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
        <div className="application-form-header">
          <div className="application-form-image">
            <img alt="avatar" className="application-form-avatar" src={user.profile_picture_url} />
            <h2>Application From</h2>
          </div>
          <div className="application-form-notice">
            <p>Please review your application before submitting </p>
            <p>* Any references you have will be shown to the landlord</p>
          </div>
        </div>
        {userInfo.map((info) => (
          <List className={classes.root}>
            <div className="appliaction-user-info">
              <span>{info.label} :</span>
              <p>{user[info.value]}</p>
            </div>
          </List>
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
        <div className="history-address">
          <span>Address :</span>
          <p>{formatAddressFromProperty(rentHistory.Property)}</p>
          <span>Period :</span>
          <p>{formatRentHistoryPeriod(rentHistory)}</p>
        </div>
      </List>
    );
  };

  const handleSubmit = async () => {
    await axios.post("http://localhost:8000/api/applications", {
      tenant_id: 11,
      property_id: propertyId,
      landlord_id: landlordId,
      potential_move_in_date: potentialMoveInDate,
    });
    setMode(SENT);
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
    return <div maxWidth="md">{error}</div>;
  }

  return (
    <div className="application-form-wrapper">
      <div className="application-form-container">

        {user && renderUserData()}
        {rentHistories.length > 0 && (
          <>
            <h4 className="app-rent-history-container">Residential history</h4>
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
        {mode === DEFAULT && (
          <>
            <Button className="button primary-btn dual-button" onClick={handleSubmit}>
              Send
          </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => history.push(`/property_details/${propertyId}`)}
            >
              cancel
          </Button>
            <Button variant="contained">Edit My Application</Button>
          </>
        )}
        {mode === SENT && (
          <>
            <p>SENT!</p>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => history.push(`/property_details/${propertyId}`)}
            >
              Back to Property Details
          </Button>
          </>
        )}
      </div>
    </div>
  );
}

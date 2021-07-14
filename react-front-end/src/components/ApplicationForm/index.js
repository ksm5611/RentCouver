import axios from "axios";
import Fade from "react-reveal/Fade";

import { useHistory } from "react-router-dom";
import useToken from "../../hooks/useToken";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  List,
  makeStyles,
  TextField
} from "@material-ui/core";

//material ui styling funtion
const useStyles = makeStyles((theme) => {
  return {
    root: {
      border: "1px solid #574f4a",
      borderRadius: 4,
      marginBottom: "16px",
      padding: "1rem",
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
  const [mode, setMode] = useState(DEFAULT);

  const history = useHistory();
  const { userId } = useToken();

  //labeling user's info function
  const userInfo = [
    { label: "Name", value: "name" },
    { label: "Current address", value: "current_address" },
    { label: "Job title", value: "job_title" },
    { label: "Annual income", value: "annual_income" },
    { label: "Other Household Occupants", value: "other_household_occupants" },
    { label: "Contact email", value: "email" },
  ];

  useEffect(() => {
    setPotentailDate(formateDefaultDate());
  }, []);
  
  // url params for rendering application form
  let { propertyId, landlordId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          `http://localhost:8000/api/applications/${userId}`
        );
        const { RentHistories: rentHistoryData, ...userData } = result.data;
        setUser(userData);
        setRentHistories(rentHistoryData);
      } catch (error) {
        setError("Your server is broken");
      }
    }
    fetchData();
  }, [userId]);

  //function for rendering user data
  const renderUserData = () => {
    return (
      <List>
        <div className="application-form-header">
          <div className="application-form-image">
            <img
              alt="avatar"
              className="application-form-avatar"
              src={user.profile_picture_url}
            />
            <h2>Application From</h2>
          </div>
          <div className="application-form-notice">
            <p>Please review your application before submitting. </p>
            <p><strong>* Any references you have will be shown to the landlord</strong></p>
          </div>
        </div>
        <Fade>
          {userInfo.map((info) => (
            <List className={classes.root}>
              <div className="appliaction-user-info">
                <span>{info.label} :</span>
                <p>{user[info.value]}</p>
              </div>
            </List>
          ))}
        </Fade>
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
      <Fade>
        <List className={classes.root}>
          <div className="history-address">
            <span>Address :</span>
            <p>{formatAddressFromProperty(rentHistory.Property)}</p>
            <span>Period :</span>
            <p>{formatRentHistoryPeriod(rentHistory)}</p>
          </div>
        </List>
      </Fade>
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
            <h4 className="app-rent-history-container">Rent history</h4>
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
        <div className="application-form-btn-container">
          {mode === DEFAULT && (
            <>
              <button
                className="button primary-btn dual-button"
                onClick={handleSubmit}
              >
                Send
              </button>
              <button
                className="button secondary-btn dual-button"
                variant="contained"
                color="secondary"
                onClick={() => history.push(`/property_details/${propertyId}`)}
              >
                Cancel
              </button>
              <button
                className="button secondary-btn dual-button"
                variant="contained"
              >
                Edit My Application
              </button>
            </>
          )}
          {mode === SENT && (
            <>
              <p>SENT!</p>
              <button
                className="button primary-btn dual-button"
                onClick={() => history.push(`/property_details/${propertyId}`)}
              >
                Back to Property Details
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

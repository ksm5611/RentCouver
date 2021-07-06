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

import ApplicationReview from '../ApplicationReview';


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
    btn: {
      backgroundColor: '#f1a177',
      color: 'white',
  
      "&:hover": {
        backgroundColor: 'rgb(7, 177, 77, 0.42)'
      }
  
    }
  };
});


export default function ApplicationList() {

  //material ui styling funtion
  const classes = useStyles();

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

          <ListItem className={classes.root}>
            <div className="req-info">
              <Avatar src=""/>
              <p className="req-tenant">Sumin Kim</p>
              <p className="req-tenant address">applied property address</p>
            </div>
            <div className="option-btn">
              <ApplicationReview />
              <Button className={classes.btn} variant="contained" color="secondary">Decline</Button>
            </div>
          </ListItem>

          <ListItem className={classes.root}>
            <div className="req-info">
              <Avatar src=""/>
              <p className="req-tenant">Felicia Okta</p>
              <p className="req-tenant address">applied property address</p>
            </div>
            <div className="option-btn">
            <ApplicationReview />
              <Button className={classes.btn} variant="contained" color="secondary">Decline</Button>
            </div>
          </ListItem>

        </List>
      </Container>

    </div>
  )
}
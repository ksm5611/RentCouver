// import RefForm from './RefReqHandling/Form';
import useVisualMode from './RefReqHandling/useVisualMode';
import ReqRefHandling from './RefReqHandling/index';
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
import '../../App.css';


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
          <ReqRefHandling />
        </List>
      </Container>

    </div>
  )
}
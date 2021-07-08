import useVisualMode from "./RefReqItem/useVisualMode";

import RefReqItem from "./RefReqItem/index";
import {
  Container,
  ListItem,
  List,
  makeStyles,
  Button,
  Avatar,
} from "@material-ui/core";
import "../../App.css";
import RentHistory from "../RentHistory/index";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      border: "1px solid black",
      marginBottom: "16px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    "& > *": {
      margin: theme.spacing(1),
    },
  };
});

export default function ReqRefList() {
  // return (
  //   <ListItem>
  //     <div className="req-info">
  //       <Avatar src="" />
  //       <p className="req-tenant"></p>
  //       <p className="req-tenant address">property address</p>
  //     </div>
  //     <div className="option-btn">
  //       <Button variant="contained">Review Reference</Button>
  //     </div>
  //   </ListItem>
  // );

  //material ui styling funtion
  const classes = useStyles();

  return (
    <div>
      <section className="hero-container second-hero-container">
        <div>
          <h2>Reference Requests </h2>
        </div>
      </section>
      <Container>
        {/* <Typography variant="h4">Tenant name Address</Typography> */}
        <ListItem className={classes.root} id="listitem-head">
          <div className="req-info head">
            <h5>Tenant's name </h5>
            <h5>Property Address</h5>
          </div>
        </ListItem>
        <List className={classes.root}>
          <RefReqItem />
        </List>
      </Container>
    </div>
  );
}

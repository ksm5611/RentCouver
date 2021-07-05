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
        {/* <Typography variant="h4">About yourself</Typography> */}
        <List>
          <ListItem className={classes.root}>
            <div className="req-ref-info">
              <Avatar src=""/>
              <p>tenant's name</p>
              <p>property address</p>
            </div>
            <div className="ref-btn">
              <Button variant="contained" color="primary">Write a Reference</Button>
              <Button variant="contained" color="secondary">Decline</Button>
            </div>
          </ListItem>
              <ListItem className={classes.root}>
                <Avatar src="" /> tenant's name  -  property address
          </ListItem>
              <ListItem className={classes.root}>
                <Avatar src="" /> tenant's name  -  property address
          </ListItem>
        </List>
      </Container>

    </div>
  )
}
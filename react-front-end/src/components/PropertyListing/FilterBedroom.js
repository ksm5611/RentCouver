import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function FilterBedroom(props) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // click function
  const handleClick = () => {
    setOpen(!open);
  };

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  const selectionArr = ["All", "1", "2", "3", "4+"];

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Bedrooms" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      {selectionArr.map((text, index) => (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              id="nested-filters"
              className={classes.nested}
              selected={selectedIndex === index}
              onClick={(event) => {
                props.changeBedroom(selectionArr[index]);
                handleListItemClick(event, index);
              }}
            >
              <ListItemText primary={text} />
            </ListItem>
          </List>
        </Collapse>
      ))}
    </>
  );
}

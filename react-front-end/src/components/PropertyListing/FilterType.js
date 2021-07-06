import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});


export default function FilterType () {

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
          <ListItemText primary="Type" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        {['Condo', 'Basement', 'Laneway House', 'Townhouse', 'Detached House'].map((text, index) => (
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button id="nested-filters" className={classes.nested}>
                <ListItemText primary={text} />
              </ListItem>
            </List>
          </Collapse>
        ))}

    </>
  )

}
import { useState } from 'react';
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

  const [open, setOpen] = useState(false);
  
  const handleClick = () => {
    setOpen(!open);
  };

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
          <ListItemText primary="Type" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        {['All', 'Apartment', 'Condo', 'House'].map((text, index) => (
          <Collapse in={open} timeout="auto" unmountOnExit>
            
            <List component="div" disablePadding>
              <ListItem button
                id="nested-filters"
                className={classes.nested}
                selected={selectedIndex === index}
                onClick={(event) => handleListItemClick(event, index)}
              >
                <ListItemText primary={text} />
              </ListItem>
            </List>
          
          </Collapse>
        ))}

    </>
  )

}
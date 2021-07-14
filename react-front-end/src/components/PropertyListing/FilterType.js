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


export default function FilterType (props) {

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const handleClick = () => {
    setOpen(!open);
  };

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  const selectionArr = ['All', 'Apartment', 'Condo', 'House'];

  return (
    <>
      <ListItem button onClick={handleClick}>
          <ListItemText primary="Type" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        {selectionArr.map((text, index) => (
          <Collapse in={open} timeout="auto" unmountOnExit>
            
            <List component="div" disablePadding>
              <ListItem button
                id="nested-filters"
                className={classes.nested}
                selected={selectedIndex === index}
                onClick={(event) => {
                  handleListItemClick(event, index);
                  props.changeType(selectionArr[index])
                  }
                }
              >
                <ListItemText primary={text} />
              </ListItem>
            </List>
          
          </Collapse>
        ))}

    </>
  )

}
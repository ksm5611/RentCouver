import React from 'react';
import { Button } from 'react-bootstrap';
import { Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import PriceSlider from './PriceSlider';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import FilterType from './FilterType';
import FilterBedroom from './FilterBedroom';
import FilterBathroom from './FilterBathroom';
import './Filters.css';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function Filters () {

  const classes = useStyles();
  
  // for the drawer
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };



  // for the nested lists inside the drawer
  // const [open, setOpen] = React.useState(true);
  
  // const handleClick = () => {
  //   setOpen(!open);
  // };



  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, true)}
    >
      <List>

        <PriceSlider />

        <FilterType />

        <FilterBedroom />

        <FilterBathroom />

      </List>

      <Divider />

      <List>
        {['Air Conditioning', 'Pets Allowed', 'Parking'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );



  return (
    <div id="proplist_top">

      <div className="filters">
        <Button
          id="btn-outline-primary"
          variant="outline-primary"
          onClick={toggleDrawer("left", true)}>
          Filters
        </Button>

        <Drawer
          style={{ width:'220px' }}
          variant="temporary"
          anchor="left"
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          >
          {list("left")}
        </Drawer>
      
      </div>

    </div>
  )

}
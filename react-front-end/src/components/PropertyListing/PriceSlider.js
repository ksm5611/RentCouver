import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
// import './PriceSlider.css';

const useStyles = makeStyles({
  root: {
    width: 220,
  },
});

function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([800, 3000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id="price-slider" className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Price Range
      </Typography>
      <Slider
        min={400}
        max={6000}
        style={{padding:'50px 0 0 0'}}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}
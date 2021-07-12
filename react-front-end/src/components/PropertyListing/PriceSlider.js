import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
// import './PriceSlider.css';

const useStyles = makeStyles({
  root: {
    width: 362,
    paddingLeft: 18,
    marginTop: 24,
    marginBottom: 40,
    height: 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
});

function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState([800, 3000]);

  // this is to allow you to drag the slider values
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
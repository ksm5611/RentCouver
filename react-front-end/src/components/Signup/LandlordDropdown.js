import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function LandlordDropdown() {
  const classes = useStyles();
  const [isLandlord, setIsLandlord] = useState(false);

  return (
    <FormControl variant="outlined" className={classes.formControl} style={{ width:"280px" }}>
      <InputLabel id="demo-simple-select-outlined-label">Are you a landlord?</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={isLandlord}
        // onChange={handleChange}
        onChange={(e) => setIsLandlord(e.target.value)}
        label="Are you a landlord?"
      >
        <MenuItem value={true}>Yes</MenuItem>
        <MenuItem value={false}>No</MenuItem>
      </Select>
    </FormControl>
  )
}
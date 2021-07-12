/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 42,
    display: 'flex',
    alignItems: 'center',
    width: 360
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  }
}));

export default function SearchBar() {
  const classes = useStyles();

  return (
    <div style={{ width: 300 }}>
      {/* <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={properties.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search properties"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      /> */}
      <div className="porp-list-header">
        <Paper component="form" className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="Where do you want to live?"
          />
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
    </div>
  );
}

const properties = [ 
  // { title: 'Arbutus Nook' },
  // { title: 'Little Mountain Living'},
  // { title: 'Oakridge Hideaway'},
  // { title: 'Marble Mansion' },
  // { title: 'Primo Valentino' },
  // { title: 'Anchor Point' },
  // { title: 'Corner Condo' },
  // { title: 'Sparkler Parker' },
  // { title: 'Kingsway Family Condo' },
  // { title: 'Kensington Palace' }
]
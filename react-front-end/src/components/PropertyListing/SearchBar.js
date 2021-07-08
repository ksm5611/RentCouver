/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function SearchBar() {
  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={properties.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
    </div>
  );
}

const properties = [ 
  { title: 'Arbutus Nook' },
  { title: 'Little Mountain Living'},
  { title: 'Oakridge Hideaway'},
  { title: 'Marble Mansion' },
  { title: 'Primo Valentino' },
  { title: 'Anchor Point' },
  { title: 'Corner Condo' },
  { title: 'Sparkler Parker' },
  { title: 'Kingsway Family Condo' },
  { title: 'Kensington Palace' }
]
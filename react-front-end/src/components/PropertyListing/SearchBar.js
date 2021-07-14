/* eslint-disable no-use-before-define */
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

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


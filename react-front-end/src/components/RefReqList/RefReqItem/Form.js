import { ListItem, Button, Avatar } from "@material-ui/core";
import { Fragment } from "react";
import "../../../App.css";

export default function RefForm(props) {
  return (
    <ListItem className={props.className}>
      <div className="option-btn">
        <Button variant="contained" color="primary" onClick={props.onSubmit}>
          Submit
        </Button>
        <Button variant="contained" color="secondary" onClick={props.onCancel}>
          Cancel
        </Button>
      </div>

      <form className="seperator">
        <textarea id="text" />
      </form>
    </ListItem>
  );
}

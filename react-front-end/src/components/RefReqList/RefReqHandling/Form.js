import {
  ListItem,
  Button,
  Avatar
} from "@material-ui/core";
import { Fragment } from "react";
import '../../../App.css';

export default function RefForm(props) {
  return (

    <ListItem className={props.classes}>
      <div className="req-info">
        <Avatar src="" />
        <p className="req-tenant">Felicia Okta</p>
        <p className="req-tenant address">property address</p>
      </div>
      <div className="option-btn">
        <Button variant="contained" color="primary" onSubmit={props.onSubmit}>Submit</Button>
        <Button variant="contained" color="secondary" onCancel={props.onCancel}>Cancel</Button>
      </div>

      <form className="seperator">
        <input type="text" id="text" />
      </form>
    </ListItem>

  )
}
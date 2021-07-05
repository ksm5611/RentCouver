import Form from './Form';
import Sent from './Sent';
import Declined from './Decilned';
import { Fragment } from 'react';
import {
  ListItem,
  Button,
  Avatar
} from "@material-ui/core";
import '../../../App.css';

export default function ReqRefHandling(props) {

  const REQUEST = "REQUEST"
  const FORM = "FORM";
  const DECLINED = "DECLINED";
  const SENT = "SENT";

  // const { mode, transition, back } = useVisualMode(
  //   props.? FORM : DECLINED
  // );

  const mode = FORM;

  return (
    <Fragment>
      {mode === REQUEST && (<ListItem className={props.classes}>
        <div className="req-info">
          <Avatar src="" />
          <p className="req-tenant">Felicia Okta</p>
          <p className="req-tenant address">property address</p>
        </div>
        <div className="option-btn">
          <Button variant="contained" color="primary" onSubmit={props.onSubmit}>Submit</Button>
          <Button variant="contained" color="secondary" onCancel={props.onCancel}>Cancel</Button>
        </div>
      </ListItem>)}
      {mode === FORM && (<Form />)}
      {mode === DECLINED && (<Declined />)}
      {mode === SENT && (<Sent />)}

    </Fragment>

  )

}
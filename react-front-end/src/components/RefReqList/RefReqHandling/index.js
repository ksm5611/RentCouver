import Form from './Form';
import Sent from './Sent';
import Declined from './Decilned';
import useVisualMode from './useVisualMode';
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

  const { mode, transition, back } = useVisualMode(REQUEST);

  // const mode = REQUEST;

  return (
    <Fragment>
      {mode === REQUEST && (<ListItem className={props.classes}>
        <div className="req-info">
          <Avatar src="" />
          <p className="req-tenant">Felicia Okta</p>
          <p className="req-tenant address">property address</p>
        </div>
        <div className="option-btn">
          <Button variant="contained" color="primary" onClick={() => transition(FORM)}>Leave Reference</Button>
          <Button variant="contained" color="secondary" onClick={() => transition(DECLINED)}>Decline</Button>
        </div>
      </ListItem>)}
      {mode === FORM && (<Form onSubmit={() => transition(SENT)} onCancel={() => back()} />)}
      {mode === DECLINED && (<Declined />)}
      {mode === SENT && (<Sent />)}
    </Fragment>
  )

}
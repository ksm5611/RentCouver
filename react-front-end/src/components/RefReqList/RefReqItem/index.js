import Form from './Form';
import Sent from './Sent';
import Declined from './Decilned';
import useVisualMode from './useVisualMode';
import { useEffect, useState } from 'react';
import { Fragment } from 'react';
import {
  ListItem,
  Button,
  Avatar
} from "@material-ui/core";
import '../../../App.css';

export default function RefReqItem({request, classes}) {

  const REQUEST = "REQUEST"
  const FORM = "FORM";
  const DECLINED = "DECLINED";
  const SENT = "SENT";

  // const [currentMode, setCurrentMode] = useState(REQUEST);

  const { mode, transition, back } = useVisualMode(REQUEST);

  useEffect(() => {
    // setCurrentMode(REQUEST)
    //axios.get
  },[])

  // map current state props

  // requst.currentState===REQUEST 

  // const mode = REQUEST;

  // function : submit to db, modify og array 

  return (
    <Fragment>
      {(mode === REQUEST) && (<ListItem className={classes}>
        <div className="req-info">
          <Avatar src="" />
          <p className="req-tenant">{request.name}</p>
          <p className="req-tenant address">{request.address}</p>
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
import axios from "axios";
import useVisualMode from '../RefReqList/RefReqItem/useVisualMode';
import ApplicationReview from "../ApplicationReview";

import {
  Button,
  Avatar,
} from "@material-ui/core";

export default function Status({ listValue }) {
  const DEFAULT = "DEFAULT";
  const DECLINED = "DECLINED";
  const { mode, transition } = useVisualMode(DEFAULT);

  const declineApp = async (appID) => {
    await axios.post(`http://localhost:8000/api/appList/${appID}`);
    transition(DECLINED)
  }


  return (
    <>
      <div className="req-info">
        <Avatar src={listValue.tenant.profile_picture_url} />
        <p className="req-tenant">{listValue.tenant.name}</p>
        <p className="req-tenant address">
          {listValue.Property.street}
          {listValue.Property.unit}
          {listValue.Property.city}
          {listValue.Property.provice}
          {listValue.Property.postal_code}
        </p>
      </div>
      <div className="option-btn">
        {mode === DEFAULT && (
          listValue.is_decline === false ? (
            <>
              <ApplicationReview tenantId={listValue.tenant_id} />
              <Button
                // className={classes.btn}
                variant="contained"
                color="secondary"
                onClick={() => { declineApp(listValue.id) }}
              >
                Decline
                </Button>
            </>
          ) : (
            DECLINED
          )
        )}
        {mode === DECLINED && (<p>DECLINED</p>)}
      </div>
    </>
  )
}
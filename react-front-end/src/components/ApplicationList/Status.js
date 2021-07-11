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
    <tr className="tr-reference">
      {/* <div className="req-info">
        <Avatar src={listValue.tenant.profile_picture_url} />
        <p className="req-tenant">{listValue.tenant.name}</p>
        <p className="req-tenant address">
          {listValue.Property.street}
          {listValue.Property.unit}
          {listValue.Property.city}
          {listValue.Property.provice}
          {listValue.Property.postal_code}
        </p>
      </div> */}
      <td><Avatar src={listValue.tenant.profile_picture_url} /></td>
      <td>{listValue.tenant.name}</td>
      <td>{listValue.Property.street}</td>
      <td>{listValue.Property.city}</td>
      <td>{listValue.Property.province}</td>
      <td>{listValue.Property.postal_code}</td>
      <td className="reference-th-button">
        {mode === DEFAULT && (
          listValue.is_decline === false ? (
            <>
              <ApplicationReview tenantId={listValue.tenant_id} />
              <button
                className="button action-button"
                onClick={() => { declineApp(listValue.id) }}
              >
                Decline
                </button>
            </>
          ) : (
            <p>{DECLINED}</p>
          )
        )}
        {mode === DECLINED && (<p>{DECLINED}</p>)}
      </td>
    </tr>
  )
}
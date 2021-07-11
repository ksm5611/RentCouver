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
    <tr className="tr-appList">
      <td><Avatar src={listValue.tenant.profile_picture_url} /></td>
      <td>{listValue.tenant.name}</td>
      <td>{listValue.Property.street}</td>
      <td>{listValue.Property.city}</td>
      <td>{listValue.Property.province}</td>
      <td>{listValue.Property.postal_code}</td>
      <td className="appList-th-button">
        {mode === DEFAULT && (
          listValue.is_decline === false ? (
            <>
              <ApplicationReview className="dual-buttons" tenantId={listValue.tenant_id} />
              <button
                className="secondary-btn button action-button dual-buttons"
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
import useVisualMode from "./useVisualMode";
import axios from "axios";
import { useEffect, useState } from "react";
import { button, Avatar, ListItem } from "@material-ui/core";

export default function Status({ refReqeust, refReqeustId }) {
  const [message, setMessge] = useState("");
  const DEFAULT = "DEFAULT";
  const FORM = "FORM";
  const DECLINED = "DECLINED";
  const SENT = "SENT";
  const { mode, transition, back } = useVisualMode(DEFAULT);

  const declineReq = async (renthistoriesId) => {
    await axios.post(
      `http://localhost:8000/api/declineRefReq/${renthistoriesId}`
    );
    transition(DECLINED);
  };

  useEffect(() => {
    if (refReqeust && refReqeust.is_updated) {
      transition(SENT);
    }
  }, [refReqeust, refReqeust.is_updated, transition]);

  const messageSubmit = async () => {
    await axios.post(
      `http://localhost:8000/api/refRequest/${refReqeust.renthistories_id}`,
      {
        message: message,
        refRequestId: refReqeust.id,
      }
    );
    transition(SENT);
  };

  return (
      <tr className="tr-reference">
        <td><Avatar src={refReqeust.RentHistory.User.profile_picture_url} /></td>
        <td>{refReqeust.RentHistory.User.name}</td>
        <td>{refReqeust.RentHistory.Property.street}</td>
        <td>{refReqeust.RentHistory.Property.city}</td>
        <td>{refReqeust.RentHistory.Property.province}</td>
        <td>{refReqeust.RentHistory.Property.postal_code}</td>
        <td className="reference-th-button">
          {mode === DEFAULT &&
            (refReqeust.is_decline === false ? (
              <>
                <button
                  className="button action-button"
                  onClick={() => transition(FORM)}
                >
                  Write Reference
              </button>
                <button
                  className="button action-button"
                  onClick={() => {
                    declineReq(refReqeust.renthistories_id);
                  }}
                >
                  Decline
              </button>
              </>
            ) : (
              <p>{DECLINED}</p>
            ))}
          {/* {mode === DECLINED && <p className="dec">DECLINED</p>} */}
          {mode === FORM &&
            (refReqeust.is_updated === false ? (
              <>
                <button
                  className="button action-button"
                  onClick={() => {
                    console.log("application", refReqeust);
                    messageSubmit(refReqeust.renthistories_id);
                  }}
                >
                  Submit
              </button>
                <button
                  className="button action-button"
                  onClick={() => back()}
                >
                  Cancel
              </button>
                <form className="seperator">
                  <textarea
                    className="review-content"
                    id="text"
                    value={message}
                    onChange={(e) => setMessge(e.target.value)}
                  />
                </form>
              </>
            ) : (
              <p>{SENT}</p>
            ))
          }
          {mode === SENT && (
            <p>{SENT}</p>
          )}
        </td>
      </tr>
  );
}

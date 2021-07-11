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
    <>
      {/* <div className="req-info">
        <Avatar src={refReqeust.RentHistory.User.profile_picture_url} />
        <p className="req-tenant">{refReqeust.RentHistory.User.name}</p>
        <p className="req-tenant address">
          {refReqeust.RentHistory.Property.street}
        </p>
      </div> */}
      <tr className="tr-reference">
        <td>{refReqeust.RentHistory.User.name}</td>
        <td>{refReqeust.RentHistory.Property.street}</td>
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
              DECLINED
            ))}
          {mode === DECLINED && <>DECLINED</>}
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
                    id="text"
                    value={message}
                    onChange={(e) => setMessge(e.target.value)}
                  />
                </form>
              </>
            ) : (
              // <ListItem className={refReqeust.classes}>
              //   <div className="option-btn">
                  <>SENT</>
               
            ))
            }
          {mode === SENT && (
            // <ListItem className={refReqeust.classes}>
            //   <div className="option-btn">
            //     <p>Sent</p>
            //   </div>
            // </ListItem>
            <>Sent</>
          )}
        </td>
      </tr>
    </>
  );
}

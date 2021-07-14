import useVisualMode from "./useVisualMode";
import axios from "axios";
import { useEffect, useState } from "react";
import Fade from 'react-reveal/Fade';
import { Avatar } from "@material-ui/core";

export default function Status({ refReqeust }) {
  const [message, setMessge] = useState("");
  const DEFAULT = "DEFAULT";
  const FORM = "FORM";
  const DECLINED = "DECLINED";
  const SENT = "SENT";
  const { mode, transition, back } = useVisualMode(DEFAULT);

  // decline request function
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

  // sending reference call
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
      <Fade>
        <td><Avatar src={refReqeust.RentHistory.User.profile_picture_url} /></td>
        <td>{refReqeust.RentHistory.User.name}</td>
        <td>{refReqeust.RentHistory.Property.street}</td>
        <td>{refReqeust.RentHistory.Property.city}</td>
        <td>{refReqeust.RentHistory.Property.province}</td>
        <td>{refReqeust.RentHistory.Property.postal_code}</td>
      </Fade>
      <td className="reference-th-button">
        {mode === DEFAULT &&
          (refReqeust.is_decline === false ? (
            <>
              <Fade>
                <button
                  className="primary-btn button action-button dual-buttons"
                  onClick={() => transition(FORM)}
                >
                  Write Reference
              </button>
              </Fade>
              <Fade>
                <button
                  className="secondary-btn button action-button dual-buttons"
                  onClick={() => {
                    declineReq(refReqeust.renthistories_id);
                  }}
                >
                  Decline
              </button>
              </Fade>
            </>
          ) : (
            <p>{DECLINED}</p>
          ))}
        {mode === DECLINED && <p className="dec">DECLINED</p>}
        {mode === FORM &&
          (refReqeust.is_updated === false ? (
            <>
              <Fade>
                <button
                  className="primary-btn button action-button dual-buttons"
                  onClick={() => {
                    messageSubmit(refReqeust.renthistories_id);
                  }}
                >
                  Submit
              </button>
              </Fade>
              <Fade>
                <button
                  className="secondary-btn button action-button dual-buttons"
                  onClick={() => back()}
                >
                  Cancel
              </button>
              </Fade>
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
            <Fade><p>{SENT}</p></Fade>
          ))
        }
        {mode === SENT && (
          <Fade><p>{SENT}</p></Fade>
        )}
      </td>
    </tr>
  );
}

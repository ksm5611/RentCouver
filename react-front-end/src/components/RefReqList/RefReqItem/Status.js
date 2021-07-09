import useVisualMode from "./useVisualMode";
import axios from "axios";
import { Button, Avatar, ListItem } from "@material-ui/core"

export default function Status({ application }) {
  const DEFAULT = "DEFAULT";
  const FORM = "FORM";
  const DECLINED = "DECLINED";
  const SENT = "SENT";
  const { mode, transition, back } = useVisualMode(DEFAULT);

  const declineReq = async (renthistoriesId) => {
    await axios.post(`http://localhost:8000/api/declineRefReq/${renthistoriesId}`);
    transition(DECLINED)
  }

  return (
    <>
      <div className="req-info">
        <Avatar
          src={application.RentHistory.User.profile_picture_url}
        />
        <p className="req-tenant">
          {application.RentHistory.User.name}
        </p>
        <p className="req-tenant address">
          {application.RentHistory.Property.street}
        </p>
      </div>
      <div className="option-btn">
        {mode === DEFAULT && (
          application.is_decline === false ? (
            <>
              <Button
                variant="contained"
                color="primary"
                onClick={() => transition(FORM)}
              >
                Write Reference
                  </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => { declineReq(application.renthistories_id) }}
              >
                Decline
                  </Button>
            </>
          ) : (
            DECLINED
          )
        )}
        {mode === DECLINED && (<p>DECLINED</p>)}
        {mode === FORM && (
          <>
            <Button variant="contained" color="primary" onClick={() => transition(SENT)}>
              Submit
            </Button>
            <Button variant="contained" color="secondary" onClick={() => back()} >
              Cancel
            </Button>
            <form className="seperator">
              <textarea id="text" />
            </form>
          </>
        )
        }
        {mode === SENT && (
          // application.is_updated === false
          <ListItem className={application.classes}>
            <div className="option-btn">
              <p>Sent</p>
            </div>
          </ListItem>
        )}
      </div>
    </>
  );
}

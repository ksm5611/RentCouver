import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Form from "./Form";
import Sent from "./Sent";
import Declined from "./Decilned";
import useVisualMode from "./useVisualMode";
import { Fragment } from "react";
import { ListItem, Button, Avatar } from "@material-ui/core";
import "../../../App.css";

export default function RefReqItem(props) {
  const [applications, setApplications] = useState([]);
  const [error, setError] = useState("");

  const REQUEST = "REQUEST";
  const FORM = "FORM";
  const DECLINED = "DECLINED";
  const SENT = "SENT";

  const { mode, transition, back } = useVisualMode(REQUEST);

  // const mode = REQUEST;
  let { landlordId } = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          `http://localhost:8000/api/refRequest/${landlordId}`
        );
        setApplications(result.data);
      } catch (error) {
        setError("Your server is broken");
      }
    }
    fetchData();
  }, [landlordId]);

  return (
    <Fragment>
      {mode === REQUEST && (
        <ListItem className={props.classes}>
          {applications.map((application) => {
            return (
              <>
                <div className="req-info">
                  <Avatar src="" />
                  <p className="req-tenant">
                    {application.RentHistory.User.name}
                  </p>
                  <p className="req-tenant address">
                    {application.RentHistory.Property.street}
                  </p>
                </div>
                <div className="option-btn">
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
                    onClick={() => transition(DECLINED)}
                  >
                    Decline
                  </Button>
                </div>
              </>
            );
          })}
        </ListItem>
      )}
      {mode === FORM && (
        <Form
          onSubmit={() => transition(SENT)}
          onCancel={() => back()}
          applications={applications}
        />
      )}
      {mode === DECLINED && <Declined />}
      {mode === SENT && <Sent />}
    </Fragment>
  );
}

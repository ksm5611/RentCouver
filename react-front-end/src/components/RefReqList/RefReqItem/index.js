import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Status from "./Status";
import useVisualMode from "./useVisualMode";
import { Fragment } from "react";
import { ListItem, Button, Avatar } from "@material-ui/core";
import "../../../App.css";

export default function RefReqItem() {
  const [applications, setApplications] = useState([]);
  const [error, setError] = useState("");
  const DEFAULT = "DEFAULT";
  const FORM = "FORM";
  const DECLINED = "DECLINED";
  const SENT = "SENT";

  const { mode, transition, back } = useVisualMode(DEFAULT);


  let { landlordId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          `http://localhost:8000/api/refRequest/${landlordId}`
        );
        setApplications(result.data);
      } catch (error) {
        setError("Your server is broken", error);
      }
    }
    fetchData();
  }, [landlordId]);


  return (
    <Fragment>

      <ListItem >
          <div className="req-info">
            {applications.map((application) => {
              return (
                  <Status application={application} />
              );
            })}
          </div>
      </ListItem>

    </Fragment>
  );
}
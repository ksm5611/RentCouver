import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Status from "./Status";
import useVisualMode from "./useVisualMode";
import { Fragment } from "react";
import useToken from "../../../hooks/useToken";
import { ListItem, Button, Avatar } from "@material-ui/core";
import "../../../App.css";

export default function RefReqItem() {
  const [refRequests, setReferenceReqeust] = useState([]);
  const [error, setError] = useState("");

  let { landlordId } = useParams();
  const { userId } = useToken();

  //landlord 1번
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          `http://localhost:8000/api/refRequest/${userId}`
        );
        setReferenceReqeust(result.data);
      } catch (error) {
        setError("Your server is broken", error);
      }
    }
    fetchData();
  }, [userId]);

  return (
    <Fragment>
      {refRequests.map((refReqeust) => {
        return <Status refReqeust={refReqeust} />;
      })}
    </Fragment>
  );
}

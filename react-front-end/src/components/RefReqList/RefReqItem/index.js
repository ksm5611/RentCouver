import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Status from "./Status";
import { Fragment } from "react";
import "../../../App.css";

export default function RefReqItem() {
  const [refRequests, setReferenceReqeust] = useState([]);
  const [error, setError] = useState("");

  let { landlordId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          `http://localhost:8000/api/refRequest/${landlordId}`
        );
        setReferenceReqeust(result.data);
      } catch (error) {
        setError("Your server is broken", error);
      }
    }
    fetchData();
  }, [landlordId]);

  return (
    <Fragment>
      {[...refRequests].reverse().map((refReqeust) => {
        return <Status refReqeust={refReqeust} />;
      })}
    </Fragment>
  );
}

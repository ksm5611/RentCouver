import axios from "axios";
import { useEffect, useState } from "react";
import Status from "./Status";
import { Fragment } from "react";
import useToken from "../../../hooks/useToken";

export default function RefReqItem() {
  const [refRequests, setReferenceReqeust] = useState([]);
  const [error, setError] = useState("");

  const { userId } = useToken();

  // fetch references for the rent history page
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
      {[...refRequests].reverse().map((refReqeust) => {
        return <Status refReqeust={refReqeust} />;
      })}
    </Fragment>
  );
}

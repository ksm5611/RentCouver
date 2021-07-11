import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import {
  // Container,
  // ListItem,
  // List,
  makeStyles
} from "@material-ui/core";

import RefStatus from './RefStatus';


// const useStyles = makeStyles((theme) => {
//   return {
//     root: {
//       border: "1px solid black",
//       marginBottom: "16px",
//       display: "flex",
//       justifyContent: "space-between",
//     },
//     btn: {
//       backgroundColor: "#f1a177",
//       color: "white",
//       "&:hover": {
//         backgroundColor: "rgb(7, 177, 77, 0.42)",
//       },
//     },
//   };
// });

export default function RentHistory() {
  // const classes = useStyles();

  const [history, setHistory] = useState([]);
  const [error, setError] = useState(false);

  let { tenantId } = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          `http://localhost:8000/api/rentHistories/${tenantId}`
        );
        setHistory(result.data);
      } catch (error) {
        setError("Your server is broken");
      }
    }
    fetchData();
  }, [tenantId]);

  return (
    <div>
      <div className="hero-wrapper">
        <section className="hero-container second-hero-container">
          <h2>My Rent History</h2>
        </section>
      </div>
      <div className="wrapper">
        {error && <div>Error Loading data</div>}
        <table className="table-container">
          <thead>
            <tr className="tr-heading">
              <th className="th-address">Address</th>
              <th className="th-city">City</th>
              <th className="th-province">Province</th>
              <th className="th-postal-code">Postal Code</th>
              <th className="th-rental-period">Rental Period</th>
              <th className="th-landlord-name">Landlord</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {history.reverse().map((record) => {
              return (
                <>
                  <RefStatus record={record} />
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

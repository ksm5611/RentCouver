import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import Fade from 'react-reveal/Fade';

import RefStatus from './RefStatus';

export default function RentHistory() {

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
              <Fade>
                <th>Address</th>
                <th>City</th>
                <th>Province</th>
                <th>Postal Code</th>
                <th>Rental Period</th>
                <th>Landlord</th>
                <th className="history-th-action">References</th>
              </Fade>
            </tr>
          </thead>
          <tbody>
            {[...history].reverse().map((record) => {
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

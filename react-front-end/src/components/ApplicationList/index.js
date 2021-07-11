import axios from "axios";
import Status from "../ApplicationList/Status";
import { useEffect, useState } from "react";
import Fade from 'react-reveal/Fade';

export default function ApplicationList() {
  const [appLists, setAppLists] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get("http://localhost:8000/api/appList/1");
        setAppLists(result.data);
      } catch (error) {
        setError("Your server is broken");
      }
    }
    fetchData();
  }, []);


  return (
    <div>
      <div className="hero-wrapper">
        <section className="hero-container second-hero-container">
          <h2>Received Applications</h2>
        </section>
      </div>

      <div className="wrapper">
          <table className="table-container">
            <thead>
              <tr className="tr-heading">
                <Fade>
                  <th></th>
                  <th>Tenant's name</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>Province</th>
                  <th>Postal Code</th>
                  <th className="appList-th-action">Action</th>
                </Fade>
              </tr>
            </thead>
            <tbody>
              {[...appLists].reverse().map((listValue) => {
                return (
                  <>
                    <Status listValue={listValue} />
                  </>
                );
              })}
            </tbody>
          </table>
      </div>
    </div>
  );
}

import axios from "axios";
import Status from "../ApplicationList/Status";
import { useEffect, useState } from "react";
import useToken from "../../hooks/useToken";
import Fade from "react-reveal/Fade";

export default function ApplicationList() {
  const [appLists, setAppLists] = useState([]);
  const [error, setError] = useState("");
  const { userId } = useToken();

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          `http://localhost:8000/api/appList/${userId}`
        );
        setAppLists(result.data);
      } catch (error) {
        setError("Your server is broken");
      }
    }
    fetchData();
  }, [userId]);

  return (
    <div>
      <div className="hero-wrapper">
        <section className="hero-container second-hero-container">
          <h2>Received Applications</h2>
        </section>
      </div>

      <div className="wrapper">
<<<<<<< HEAD
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
                  <th className="appList-th-action">Applications</th>
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
=======
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
>>>>>>> 6e824b321b12308aa1eeb69261df578791d6c8e6
      </div>
    </div>
  );
}

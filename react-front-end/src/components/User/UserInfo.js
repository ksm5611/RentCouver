// import { Button } from 'react-bootstrap';
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { List } from "rsuite";
import { ListItemText } from "@material-ui/core";

export default function UserInfo() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const userList = [
    { label: "Contact Information", value: "email" },
    { label: "Current address", value: "current_address" },
    { label: "Job title", value: "job_title" },
  ];
  let { tenantId } = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          `http://localhost:8000/api/users/${tenantId}`
        );
        const { ...userData } = result.data;
        setUser(userData);
      } catch (error) {
        setError("Your server is broken");
      }
    }
    fetchData();
  }, [tenantId]);

  const settings = [
    "Edit MyAccount",
    "Preferences",
    "Notifications",
    "Privacy and Safety",
  ];

  if (!user) {
    return <div>Loading..</div>;
  }

  return (
    <section className="user-info-wrapper">
      <div>
        <div>
          {/* <section>
            <ul>
              
            </ul>
          </section>
          <section>

          </section> */}
          <List bordered className="user-info-list">
            <List.Item id="my-info-label">User Information</List.Item>
            {userList.map((info) => (
              <List.Item key={info.label} index={info.value}>
                <ListItemText
                  primary={info.label}
                  secondary={user[info.value]}
                />
              </List.Item>
            ))}
          </List>
          <List bordered className="user-info-list">
            <List.Item id="my-info-label">Account Settings</List.Item>
            {settings.map((item, index) => (
              <List.Item key={index} index={index}>
                {item}
              </List.Item>
            ))}
          </List>
        </div>
      </div>
    </section>
  );
}

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../../App.css";

export default function UserpageHeroContent() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

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

  //if loading backend info is slow, this will show shortly
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <div className="hero-wrapper">
        <section className="hero-content wrapper">
          <div className="hero-content-item">
            <div className="round-container">
              <img
                className="profile-img"
                src={user.profile_picture_url}
                alt="profile"
              />
            </div>
            <h2>{user.name}</h2>
          </div>
        </section>
      </div>
    </section>
  );
}

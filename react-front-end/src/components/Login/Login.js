import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import "./Login.css";

export default function Login({ setToken }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const loginUser = async () => {
    const response = await axios.post("http://localhost:8000/api/auth/signin", {
      email: email,
      password: password,
    });
    return response;
  };

  console.log("here");
  //submit login form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser({
      email,
      password,
    });
    console.log("landlord", response.data.is_landlord);
    setToken(
      response.data.accessToken,
      response.data.id,
      response.data.is_landlord
    );
    history.push(`/user/${response.data.id}`);
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

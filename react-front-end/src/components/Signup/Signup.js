import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

export default function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState();
  const [jobTitle, setJobTitle] = useState();
  const [annualIncome, setAnnualIncome] = useState();
  const [isLandlord, setIsLandlord] = useState(false);
  const history = useHistory();

  const signUpUser = async () => {
    await axios.post("http://localhost:8000/api/auth/signup", {
      name: name,
      email: email,
      password: password,
      current_address: address,
      job_title: jobTitle,
      annual_income: annualIncome,
      is_landlord: isLandlord,
    });
  };

  //submit sign up form
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUpUser({
      name,
      email,
      password,
      address,
      jobTitle,
      annualIncome,
      isLandlord,
    });
    history.push("/login");
  };

  return (
    <div className="signup-wrapper">
      <h1>Sign up Here!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Name</p>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </label>
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
        <label>
          <p>Address</p>
          <input type="text" onChange={(e) => setAddress(e.target.value)} />
        </label>
        <label>
          <p>Job Title</p>
          <input type="text" onChange={(e) => setJobTitle(e.target.value)} />
        </label>
        <label>
          <p>Annual Income</p>
          <input
            type="text"
            onChange={(e) => setAnnualIncome(e.target.value)}
          />
        </label>
        <label>
          <p>Are you Landlord?</p>
          <input type="text" onChange={(e) => setIsLandlord(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

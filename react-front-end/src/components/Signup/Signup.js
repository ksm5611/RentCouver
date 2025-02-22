import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import LandlordDropdown from "./LandlordDropdown";

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
      {/* <div className={classes.root}> */}
        <h1>Sign Up Here!</h1>
        <Paper className="form-paper" elevation={3}>
          <form className="form-content"  onSubmit={handleSubmit}>
            <div className="form-textbox">
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-textbox">
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-textbox">
              <TextField
                id="outlined-basic"
                label="Password"
                type="password"
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-textbox">
              <TextField
                id="outlined-basic"
                label="Address"
                variant="outlined"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="form-textbox">
              <TextField
                id="outlined-basic"
                label="Job Title"
                variant="outlined"
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </div>
            <div className="form-textbox">
              <TextField
                id="outlined-basic"
                label="Annual Income"
                variant="outlined"
                onChange={(e) => setAnnualIncome(e.target.value)}
              />
            </div>
            <div>
              <LandlordDropdown className="form-textbox"/>
            </div>
            <div>
              <button type="submit" className="button primary-btn signup-button">Submit</button>
            </div>
          </form>
        </Paper>
      {/* </div> */}
    </div>
  );
}

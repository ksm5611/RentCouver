import '../../App.css'
import axios from 'axios';

export default function HeroContent () {

  // const [state, setState] = useState({
  //   day: "Monday", // initial day state "Monday"
  //   days: [],
  //   appointments: {},
  //   interviewers: {}
  // });
  
  // this useEffect hook will fetch data
  // useEffect(() => {
  //   const promiseDays = '/api/days';
  //   const promiseAppointments = '/api/appointments';
  //   const promiseInterviewers = '/api/interviewers';
  
  //   Promise.all([
  //     axios.get(promiseDays),
  //     axios.get(promiseAppointments),
  //     axios.get(promiseInterviewers),
  //   ])
  //     .then((all) => {
  //       setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }))
  //     })
  // }, [])

  const user = [
    {
    "id": 1,
    "name": "Sura Jeon",
    "email": "example1@lhl.com",
    "password": "password",
    "current_address": "2595 W 1st Ave, Vancouver, BC V6K 1G8",
    "job_title": "Web Developer",
    "annual_income": 50000,
    "other_household_occupants": null,
    "profile_picture_url": 'https://cad.gov.jm/wp-content/uploads/2017/10/img_avatar2.png',
    "is_landlord": true
    },
    {
    "id": 2,
    "name": "Felicia Okta",
    "email": "example2@lhl.com",
    "password": "password",
    "current_address": "2597 W 1st Ave, Vancouver, BC V6K 1G8",
    "job_title": "Web Developer",
    "annual_income": 50000,
    "other_household_occupants": null,
    "profile_picture_url": null,
    "is_landlord": true
    }
  ]

  return(
    <section className="hero-container">
      <div className="hero-content">
        <div className="hero-content-item"><img className="profile-img" src={user[0].profile_picture_url} alt="profile"/></div>
        <p className="hero-content-item">{user[0].name}</p>
      </div>
    </section>
  )
  
}
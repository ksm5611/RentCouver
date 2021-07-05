import { useEffect, useState, setError } from 'react'
import { List } from 'rsuite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faBath, faRulerCombined, faCar, faSnowflake, faDog, faCat, faBoxOpen } from '@fortawesome/free-solid-svg-icons'
import Slideshow from './Slideshow';
import axios from 'axios';

export default function PropertyDetails() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          "http://localhost:8000/api/applications/10"
        );
        const { Users: userInfo } = result.data;
        // console.log("hello", userInfo);
        setUser(userInfo);
      } catch (error) {
        setError("Your server is broken");
      }
    }
    fetchData();
  }, []);

  const renderUserInfo = () => {
    return (
    <List.Item className="landlord-contact-container">
      <img className="landlord-img" alt="landlord-img" src='https://cad.gov.jm/wp-content/uploads/2017/10/img_avatar2.png' />
        <h3>{user.name}</h3>
    </List.Item>

    )
  }

  return (
    <div>
      <section className="hero-container second-hero-container">
        <div>
          <h2>Property Details</h2>
        </div>
      </section>

      <div className="property-container-wrapper">

        <div className="property-container-top">
          <div className="landlord-contact-container">
            <Slideshow />
          </div>
          <List bordered className="contact-info">
            {/* <List.Item className="landlord-contact-container"><img className="landlord-img" alt="landlord-img" src='https://cad.gov.jm/wp-content/uploads/2017/10/img_avatar2.png' /><h3>Sumin Kim</h3></List.Item> */}
            {user && renderUserInfo()}
            <List.Item className="landlord-contact-container">
              <p>Work: 604-xxx-xxxx</p>
              <p>Cell: 604-xxx-xxxx</p>
            </List.Item>
            <List.Item className="landlord-contact-container">
              <p>Email: example@lhl.com</p>
              <button className="contact-us btn"><a href="mailto:webmaster@example.com">Contact Landlord</a></button>
            </List.Item>
            <List.Item className="landlord-contact-container">
              <button className="contact-us btn"><a href="/">Application Form</a></button>
            </List.Item>
          </List>
        </div>

        <div className="property-container-bottom">
          <div className="property-title">
            <h2>Modern house on Arbutus</h2>
            <p>Listed 4 days ago</p>
          </div>
          <ul className="details-main">
            <li className="details-main-list"><h4>$3200/mo</h4></li>
            <li className="details-main-list"><h4>2405 Heather St. Vancouver BC V5Z 0B8</h4></li>
          </ul>
          <ul className="sub-details">
            <li className="sub-details-item"><h1><FontAwesomeIcon icon={faBed} /> </h1><p>3 Bedrooms</p></li>
            <li className="sub-details-item"><h1><FontAwesomeIcon icon={faBath} /> </h1><p>3 Bathrooms</p></li>
            <li className="sub-details-item"><h1><FontAwesomeIcon icon={faRulerCombined} /> </h1><p>1400 Sqft</p></li>
            <li className="sub-details-item"><h1><FontAwesomeIcon icon={faCar} /> </h1><p>Parking</p></li>
          </ul>
          <p className="property-description">
            The Edward - Brand new boutique development by Mosaic. Spacious & filled with light, with 10-ft. ceilings & big windows. Huge wrap-around balcony. Quality finishings, with attention to details. Serene view of mountains & treetops. Close to Cambie Canada Line station, Queen Elizabeth Park, Cambie village, and Main Street. LEED Gold certified.
          </p>
          <h3>Amenities</h3>
          <ul className="amenities">
            <li className="sub-details-item"><h5><FontAwesomeIcon icon={faSnowflake} /> Air Conditioning</h5></li>
            <li className="sub-details-item"><h5><FontAwesomeIcon icon={faDog} /> Dogs OK</h5></li>
            <li className="sub-details-item"><h5><FontAwesomeIcon icon={faCat} /> Cats OK</h5></li>
            <li className="sub-details-item"><h5><FontAwesomeIcon icon={faBoxOpen} /> Storage</h5></li>
          </ul>
        </div>


      </div>
    </div>
  )
}
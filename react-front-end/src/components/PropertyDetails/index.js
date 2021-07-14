import axios from "axios";
import { useEffect, useState, setError } from "react";
import { useParams } from "react-router-dom";
import { List } from "rsuite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"

import {
  faBed,
  faBath,
  faRulerCombined,
  faCar,
  faSnowflake,
  faDog,
  faCat,
  faBoxOpen,
} from "@fortawesome/free-solid-svg-icons";
import Slideshow from "./Slideshow";

export default function PropertyDetails() {
  const [user, setUser] = useState(null);
  const [property, setProperty] = useState(null);

  let { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          `http://localhost:8000/api/properties/${id}`
        );
        const { User: userData, ...propertyData } = result.data;
        setUser(userData);
        setProperty(propertyData);
      } catch (error) {
        setError("Your server is broken");
      }
    }
    fetchData();
  }, [id]);

  if (!user || !property) {
    return <div>Loading...</div>;
  }

  return (
    <div className="property-details-main-container">
      <div className="hero-wrapper">
        <section className="hero-container second-hero-container">
          <h2>Property Details</h2>
        </section>
      </div>
      <div className="wrapper">
        <div className="property-container">
          <div className="property-container-top">
            <div className="landlord-contact-container">
              <Slideshow />
            </div>
            <List bordered className="contact-info">
              <List.Item className="landlord-contact-container">
                <img
                  className="landlord-img"
                  alt="landlord-img"
                  src={user.profile_picture_url}
                />
                <h3>{user.name}</h3>
              </List.Item>
              <List.Item className="landlord-contact-container">
                <p>Work: 604-xxx-xxxx</p>
                <p>Cell: 604-xxx-xxxx</p>
              </List.Item>
              <List.Item className="landlord-contact-container">
                <p>{user.email}</p>
                <button className="button secondary-btn">
                  <a href={`mailto:${user.email}`}>
                    Contact Landlord
                </a>
                </button>
              </List.Item>
              <List.Item className="landlord-contact-container">
                <Link to={`/applicationForm/${property.id}/${property.landlord_id}`}>
                  <button className="button primary-btn">
                    Application Form
                  </button>
                </Link>
              </List.Item>
            </List>
          </div>

          <div className="property-container-bottom">
            <div className="property-title">
              <h2>{property.title}</h2>
              <h2 className="price-per-month">${property.cost_of_month}/month</h2>
            </div>
            <div className="details-main">
              <div className="details-main-list">
                <h5>{property.street}</h5>
                {property.unit === null ? null : <h5>{property.unit} &nbsp;</h5>}
                <h5>{property.city}</h5>
                <h5>{property.province}</h5>
                <h5>{property.postal_code}</h5>
              </div>
            </div>
            <ul className="sub-details">
              <li className="sub-details-item">
                <h1>
                  <FontAwesomeIcon icon={faBed} />{" "}
                </h1>
                <p>{property.number_of_bedrooms} Bedrooms</p>
              </li>
              <li className="sub-details-item">
                <h1>
                  <FontAwesomeIcon icon={faBath} />{" "}
                </h1>
                <p>{property.number_of_bathrooms} Bathrooms</p>
              </li>
              <li className="sub-details-item">
                <h1>
                  <FontAwesomeIcon icon={faRulerCombined} />{" "}
                </h1>
                <p>{property.square_feet} Sqft</p>
              </li>
              <li className="sub-details-item">
                <h1>
                  <FontAwesomeIcon icon={faCar} />{" "}
                </h1>
                <p>Parking</p>
              </li>
            </ul>
            <p className="property-description">{property.description}</p>
            <h4>Amenities</h4>
            <ul className="amenities">
              <li className="sub-details-item">
                <h5>
                  <FontAwesomeIcon icon={faSnowflake} /> Air Conditioning
              </h5>
              </li>

              <li className="sub-details-item">
                <h5>
                  <FontAwesomeIcon icon={faDog} />{" "}
                  {property.pets_allowed ? "Dogs OK" : "Dogs not allowed"}
                </h5>
              </li>
              <li className="sub-details-item">
                <h5>
                  <FontAwesomeIcon icon={faCat} />{" "}
                  {property.pets_allowed ? "Cats OK" : "Cats not allowed"}
                </h5>
              </li>
              <li className="sub-details-item">
                <h5>
                  <FontAwesomeIcon icon={faBoxOpen} /> Storage
              </h5>
              </li>
            </ul>
            <span>Listed 4 days ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}

import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./PropertyListItem.css";

export default function PropertyListItem() {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState("");
  const [data, setData] = useState({ hits: [] });
  const [url, setUrl] = useState();

  const propertyValues = ["cost_of_month", "listed_start_date"];

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          "http://localhost:8000/api/propertyLists"
        );

        setProperties(result.data);
      } catch (error) {
        setError("Your server is broken");
      }
    }
    fetchData();
  }, []);


  const filterClick = function (query) {
    setUrl(BASEURL + query);
  };


  // Build array of 'hits' from data
  const mappedList = data.hits.map(item => (
    <li key={item.objectID}>
      <a href={item.url}>{item.title}</a>
    </li>
  ));


  const renderPropertyCard = (property) => {
    return (
      <div id="card" key={property.id}>
        <Card id="prop_ins">
          <Card.Img
            id="card-img"
            variant="top"
            src={property.Photos[0].photo_url}
          />
          <div>
            <Card.Body id="card-body">
              <Card.Title>{property.title}</Card.Title>
              {propertyValues.map((value) => (
                <Fragment key={property.id + value}>
                  <Card.Text>
                    {value === "cost_of_month" ? (
                      <p>
                        <b>${property.cost_of_month}</b>
                      </p>
                    ) : (
                      <p>{property[value]}</p>
                    )}
                  </Card.Text>
                </Fragment>
              ))}
              <div id="propslist_buttons">
                <Button
                  id="btn-outline-primary"
                  variant="outline-primary"
                  href={`/property_details/${property.id}`}
                >
                  Details
                </Button>
                <Button id="btn-outline-primary" variant="outline-primary">
                  Message
                </Button>
              </div>
            </Card.Body>
          </div>
        </Card>
      </div>
    );
  };

  if (properties.length < 1) {
    return <div>Loading..</div>;
  }

  return (
    <div id="card-container">
      {properties.map((property) => renderPropertyCard(property))}
    </div>
  );
}

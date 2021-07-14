import { Fragment } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
  root: {
    backgroundColor: "#c1b9b9",
    paddingTop: "4px",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 16
  },
});

export default function PropertyListItem({ properties }) {
  const propertyValues = ["cost_of_month", "listed_start_date"];

  const classes = useStyles();

  const renderPropertyCard = (property) => {
    return (
        <Card className={classes.card}>
          <Card.Img
            id="card-img"
            variant="top"
            src={property.Photos[0].photo_url}
          />
          <div>
            <Card.Body className="card-body">
              <Card.Title className="property-title">{property.title}</Card.Title>
              {propertyValues.map((value) => (
                <Fragment key={property.id + value}>
                  <Card.Text>
                    {value === "cost_of_month" ? (
                      <p className="price-per-month">
                        <b>${property.cost_of_month}</b>
                      </p>
                    ) : (
                      <p><span><strong>Listed on: </strong></span>{property[value]}</p>
                    )}
                  </Card.Text>
                </Fragment>
              ))}
              <div className="prop_list_buttons">
                <Link to={`/property_details/${property.id}`}>
                  <button className="button dual-buttons primary-btn">
                    Details
                  </button>
                </Link>
                <button className="button dual-buttons secondary-btn" variant="outline-primary">
                  Message
                </button>
              </div>
            </Card.Body>
          </div>
        </Card>
    );
  };

  if (properties.length < 1) {
    return <div>Loading..</div>;
  }

  return (
    <>
      {properties.map((property) => renderPropertyCard(property))}
    </>
  );
}

import { Card } from 'react-bootstrap';
import './PropertyListItem.css';

const searchResults = {
  title: 'Arbutus Nook',
  price: 2400,
  image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
  bathrooms: 2,
  bedrooms: 1
}

export default function PropertyListItem () {
  return (
    <div id="card-container">
      <div id="card">

        <Card id="prop_ins">
          <Card.Img variant="top" src={searchResults.image} />
          <Card.Body>
            <Card.Title>{searchResults.title}</Card.Title>
            <Card.Text>
              {searchResults.bedrooms} bed {searchResults.bathrooms} bath
            </Card.Text>
          </Card.Body>
        </Card>

      </div>
    </div>
  )
}
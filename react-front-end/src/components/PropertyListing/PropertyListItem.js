import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
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
          <Card.Img id="card-img" variant="top" src={searchResults.image} />
          <div>
            <Card.Body id="card-body">
              <Card.Title>{searchResults.title}</Card.Title>
              <Card.Text>
                <p><b>${searchResults.price}</b></p>
                <p id="bed-bath">{searchResults.bedrooms} bed {searchResults.bathrooms} bath</p>
              </Card.Text>
                <div id="propslist_buttons">
                  <Button id="btn-outline-primary" variant="outline-primary">
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

      <div id="card">

        <Card id="prop_ins">
          <Card.Img id="card-img" variant="top" src={searchResults.image} />
          <div>
            <Card.Body id="card-body">
              <Card.Title>{searchResults.title}</Card.Title>
              <Card.Text>
                <p><b>${searchResults.price}</b></p>
                <p>{searchResults.bedrooms} bed {searchResults.bathrooms} bath</p>
              </Card.Text>
                <div className="propslist_buttons">
                  <Button id="btn-outline-primary" variant="outline-primary">
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

    </div>
  )
}
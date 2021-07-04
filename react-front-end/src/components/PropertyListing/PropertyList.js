import { Button } from 'react-bootstrap';
import './PropertyList.css'

const test = {
  propertyName: 'Arbutus Nook',
  image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
  address: '3833 Arbutus St'
}

// color: #a09898;
// border-radius: 60 px;

export default function PropertyDisplay () {

  return (
    <div>
      <div className="filters">
        <Button variant="outline-primary">
          Price
        </Button>
        <Button variant="outline-primary">
          Bedrooms
        </Button>
        <Button variant="outline-primary">
          Bathrooms
        </Button>
      </div>

      <li>{test.propertyName}</li>
      <img width="50%" height="auto" src={test.image} />
    </div>
  )

}
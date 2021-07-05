import { Button } from 'react-bootstrap';
import './PropertyList.css';
import PropertyListItem from './PropertyListItem';


export default function PropertyDisplay () {

  return (
    <div id="proplist_top">

      <div className="filters">
        <Button id="btn-outline-primary" variant="outline-primary">
          Price
        </Button>
        <Button id="btn-outline-primary" variant="outline-primary">
          Bedrooms
        </Button>
        <Button id="btn-outline-primary" variant="outline-primary">
          Bathrooms
        </Button>
      </div>

      <PropertyListItem />

    </div>
  )

}
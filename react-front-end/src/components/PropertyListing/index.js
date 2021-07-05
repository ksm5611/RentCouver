import Filters from "./Filters";
import Map from "./Map";
import PropertyListItem from "./PropertyListItem";
import './index.css'

export default function PropertyListing () {

  return (
    <div id='proplist-container'>
      <Filters />
      <div id='map-and-proplist'>
        <PropertyListItem />
        <Map />
      </div>
    </div>
  )

}
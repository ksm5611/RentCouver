import { withScriptjs, GoogleApiWrapper, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import './Map.css';

export default function Googlemaps () {
  
  const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 49.24166720749587, lng: -123.11294165838781 }}
    >
    {props.isMarkerShown && <Marker position={{ lat: 49.24166720749587, lng: -123.11294165838781 }} />}
    </GoogleMap>
  ))
  
  return (
    <div id='prop-map'>

      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBll-wcAmMAts26B9ItG6HIl3cnviRY3lE"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `500px`, width: `1000px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />

    </div>
  )
}




// import React from 'react'
// import { GoogleMap, LoadScript } from '@react-google-maps/api';

// const containerStyle = {
//   width: '400px',
//   height: '400px'
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523
// };

// function MyComponent() {
//   return (
//     <LoadScript
//       googleMapsApiKey="AIzaSyBll-wcAmMAts26B9ItG6HIl3cnviRY3lE"
//     >
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={10}
//       >
//         { /* Child components, such as markers, info windows, etc. */ }
//         <></>
//       </GoogleMap>
//     </LoadScript>
//   )
// }

// export default React.memo(MyComponent)




// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }

// export default function Googlemaps () {
//   return (
//     <>
//     <head>
//     <title>Simple Map</title>
//     <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
//     <link rel="stylesheet" type="text/css" href="./style.css" />
//     <script src="./index.js"></script>
//   </head>
//   <body>
//     <div id="map"></div>

//     <script
//       src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&libraries=&v=weekly"
//       async
//     ></script>
//   </body>
//   </>
//   )
// }
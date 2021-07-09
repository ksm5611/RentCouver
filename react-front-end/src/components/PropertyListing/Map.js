import { withScriptjs, GoogleApiWrapper, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const APIKey = process.env.REACT_APP_GooglemapsAPI;

const coordinates = [

];

export default function Googlemaps () {
  
  const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 49.24166720749587, lng: -123.11294165838781 }}
    >
    {props.isMarkerShown && <Marker position={{ lat: 49.252318827830294, lng: -123.15375371698808 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 49.237465902737796, lng: -123.09573047280983 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 49.227728655468496, lng: -123.10484870164525 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 49.25181643830623, lng: -123.17114724212357 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 49.22324230537308, lng: -123.11985854691133 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 49.27716227436591, lng: -123.13067197465885 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 49.23021968697617, lng: -123.1564160865572 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 49.234801755259674, lng: -123.11291269229395 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 49.24714123337718, lng: -123.06773091313579 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 49.238007279365696, lng: -123.07866826133036 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 49.25316901162783, lng: -123.06638955659804 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 49.23813068168057, lng: -123.0513843965241 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 49.26887333377869, lng: -123.09874692915096 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 49.27136394817117, lng: -123.10388428070264 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 49.27612504252245, lng: -123.10148916721022 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 49.27018912267473, lng: -123.10837389555222 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 49.271292091056615, lng: -123.10314560176863 }} />}
    {props.isMarkerShown && <Marker position={{ lat: 49.248786860652494, lng: -123.11104490349538 }} />}

    </GoogleMap>
  ))
  
  return (
    <div id='prop-map'>

      <MyMapComponent
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${APIKey}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `750px`, width: `880px` }} />}
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
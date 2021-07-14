import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const APIKey = process.env.REACT_APP_GooglemapsAPI;

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

      <MyMapComponent
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${APIKey}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `831px`, width: `900px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />

  )
}


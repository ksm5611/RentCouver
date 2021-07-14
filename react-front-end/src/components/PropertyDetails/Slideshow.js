import React from "react";
import axios from "axios";
import { useEffect, useState, setError } from "react";
import { useParams } from "react-router-dom";
import { Slide } from "react-slideshow-image";

const Slideshow = () => {
  const [property, setProperty] = useState(null);
  const [photos, setPhotos] = useState(null);

  // url param to set property and property-image data
  let { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          `http://localhost:8000/api/properties/${id}`
        );
        const { Photos: photoData, ...propertyData } = result.data;
        setProperty(propertyData);
        setPhotos(photoData);
      } catch (error) {
        setError("Your server is broken");
      }
    }
    fetchData();
  }, [id]);

  // to prevent browser crash due to data loading time
  if (!property || !photos) {
    return <div>Loading...</div>;
  }

  return (
    <div className="property-slideshow">
      <Slide easing="ease">
        {photos.map((photo) => {
          return (
            <div className="each-slide" key={photo.id}>
              <div style={{ backgroundImage: `url(${photo.photo_url})` }}></div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
};

export default Slideshow;

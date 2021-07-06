import React from "react";
import axios from "axios";
import { useEffect, useState, setError } from "react";
import { useParams } from "react-router-dom";
import { Slide } from "react-slideshow-image";

const slideImages = [
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
  "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80",
];

const Slideshow = () => {
  // const [user, setUser] = useState(null);
  const [property, setProperty] = useState(null);
  const [photos, setPhotos] = useState(null);

  let { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          `http://localhost:8000/api/properties/${id}`
        );
        const { Photos: photoData, ...propertyData } = result.data;
        // setUser(userData);
        setProperty(propertyData);
        setPhotos(photoData);
      } catch (error) {
        setError("Your server is broken");
      }
    }
    fetchData();
  }, [id]);

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
// style={{ backgroundImage: `url(${photo.photo_url})` }}

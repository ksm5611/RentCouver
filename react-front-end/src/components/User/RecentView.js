import axios from "axios";
import { useEffect, useState } from "react";
import PropertyListItem from "../PropertyListing/PropertyListItem";

export default function RecentView() {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          "http://localhost:8000/api/propertyLists?limit=3"
        );
        setProperties(result.data);
      } catch (error) {
        setError("Your server is broken");
      }
    }
    fetchData();
  }, []);

  if (properties.length < 1) {
    return <div>Loading...</div>;
  }
  return (
    <div className="viewed-property">
      <PropertyListItem properties={properties} />
    </div>
  );
}

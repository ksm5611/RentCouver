import axios from "axios";
import { useEffect } from "react";

export default function ApplicationForm() {
  const application = [
    { label: "Name", value: "name" },
    { label: "Name", value: "name" },
    { label: "Name", value: "name" },
  ];

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          "http://localhost:8000/api/applications/10"
        );
        console.log(result.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      {application.map((label) => {
        return (
          <div key={label.value}>
            <label>{label.label}</label>
            <p>{label.value}</p>
          </div>
        );
      })}
    </div>
  );
}

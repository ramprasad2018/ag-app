// FarmID.js

import React, { useState, useEffect } from "react";
import axios from "axios";

function FarmID({ onSelect }) {
  const [farmIDs, setFarmIDs] = useState([]);
  const [selectedID, setSelectedID] = useState("");

  // Fetch the farm IDs from the backend
  useEffect(() => {
    axios
      .get("/api/farmIDs")
      .then((response) => {
        setFarmIDs(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Handle the selection change
  const handleChange = (event) => {
    setSelectedID(event.target.value);
  };

  // Handle the next button click
  const handleClick = () => {
    // Call the onSelect prop function with the selected ID
    onSelect(selectedID);
  };

  return (
    <div>
      <h1>Select a Farm ID</h1>
      <select value={selectedID} onChange={handleChange}>
        {farmIDs.map((id) => (
          <option key={id} value={id}>
            {id}
          </option>
        ))}
      </select>
      <button onClick={handleClick}>Next</button>
    </div>
  );
}

export default FarmID;

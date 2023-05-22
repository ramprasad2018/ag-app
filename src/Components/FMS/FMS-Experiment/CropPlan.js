// CropPlan.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import Stage from "./Stage";

function CropPlan({ farmID }) {
  const [cropPlan, setCropPlan] = useState(null);

  // Fetch the crop plan from the backend based on the farm ID
  useEffect(() => {
    axios
      .get(`/api/cropPlan/${farmID}`)
      .then((response) => {
        setCropPlan(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [farmID]);

  // Handle the update button click
  const handleClick = () => {
    // Send the updated crop plan to the backend using a PUT or PATCH method
    axios
      .put(`/api/cropPlan/${farmID}`, cropPlan)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Crop Plan for {farmID}</h1>
      {cropPlan ? (
        <table>
          <thead>
            <tr>
              <th>Crop Details</th>
              <th>Stages</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{JSON.stringify(cropPlan.cropDetails)}</td>
              <td>
                {cropPlan.stages.map((stage) => (
                  <Stage key={stage.id} stage={stage} />
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={handleClick}>Update</button>
    </div>
  );
}

export default CropPlan;

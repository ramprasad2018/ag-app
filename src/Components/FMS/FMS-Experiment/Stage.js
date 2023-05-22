// Stage.js

import React, { useState } from "react";
import Activity from "./Activity";

function Stage({ stage }) {
  const [stageDetails, setStageDetails] = useState(stage.stageDetails);

  // Handle the input change for stage details
  const handleChange = (event) => {
    setStageDetails(event.target.value);
  };

  return (
    <div>
      <h2>Stage {stage.id}</h2>
      <input value={stageDetails} onChange={handleChange} />
      {stage.activities.map((activity) => (
        <Activity key={activity.id} activity={activity} />
      ))}
    </div>
  );
}

export default Stage;

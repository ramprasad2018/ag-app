// Activity.js

import React, { useState } from "react";

function Activity({ activity }) {
  const [activityName, setActivityName] = useState(activity.activityName);
  const [instructions, setInstructions] = useState(activity.instructions);

  // Handle the input change for activity name
  const handleNameChange = (event) => {
    setActivityName(event.target.value);
  };

  // Handle the textarea change for instructions
  const handleInstructionsChange = (event) => {
    setInstructions(event.target.value);
  };

  return (
    <div>
      <h3>Activity {activity.id}</h3>
      <input value={activityName} onChange={handleNameChange} />
      <textarea value={instructions} onChange={handleInstructionsChange} />
    </div>
  );
}

export default Activity;

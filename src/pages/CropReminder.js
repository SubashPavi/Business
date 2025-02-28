// CropReminder.js
import React, { useState } from "react";

const CropReminder = () => {
  const [done, setDone] = useState(false);

  const handleCompletion = () => {
    setDone(true);
  };

  return (
    <div>
      <h2>Crop Reminder</h2>
      <p>Watering reminder: Water the crops every 30 days.</p>
      <p>Fertilizer: Use Nitrogen fertilizer at planting.</p>
      <button onClick={handleCompletion}>Mark as Done</button>

      {done && (
        <div>
          <h3>Harvest Info:</h3>
          <p>Harvest in 90 days. Estimated market price: $200.</p>
        </div>
      )}
    </div>
  );
};

export default CropReminder;

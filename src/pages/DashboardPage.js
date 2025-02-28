// DashboardPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate is used to navigate between pages
import moment from 'moment';
import './DashboardPage.css'; // Import your CSS file for styling

const DashboardPage = () => {
  const [startDate, setStartDate] = useState('');
  const [cropCategory, setCropCategory] = useState('');
  const [growthStage, setGrowthStage] = useState('');
  const [wateringReminder, setWateringReminder] = useState('');
  
  const navigate = useNavigate(); // Initialize navigate function for routing

  const cropStages = {
    "Wheat": ["Planting", "Germination", "Flowering", "Maturity"],
    "Rice": ["Transplanting", "Tillering", "Heading", "Ripening"],
    "Carrot": ["Germination", "Vegetative", "Flowering", "Maturity"],
    "Banana": ["Planting", "Growth", "Maturity"],
    "Corn": ["Germination", "Vegetative", "Silking", "Maturity"],
    "Turmeric": ["Planting", "Vegetative", "Flowering", "Maturity"],
    "Beans": ["Germination", "Vegetative", "Flowering", "Maturity"],
    // Add more crops as needed
  };

  const handleStartDateChange = (e) => {
    const date = e.target.value;
    setStartDate(date);

    if (date && cropCategory) {
      const growthDuration = cropCategory === "Wheat" ? 120 : 150; // Example duration
      const nextWatering = moment(date).add(growthDuration, "days");
      setWateringReminder(`Water crops around ${nextWatering.format("MMMM Do YYYY")}`);
    }
  };

  const handleCropCategoryChange = (e) => {
    const category = e.target.value;
    setCropCategory(category);
    setGrowthStage(cropStages[category][0]);
  };

  // Function to navigate to the crop selection page with the selected crop category
  const handleNavigate = () => {
    navigate(`/crop-selection/${cropCategory}`);
  };

  return (
    <div className="dashboard-container">
      <h2>Farmer Dashboard</h2>

      <div>
        <label>Select Crop Category: </label>
        <select onChange={handleCropCategoryChange} value={cropCategory}>
          <option value="">Select</option>
          <option value="Wheat">Wheat</option>
          <option value="Rice">Rice</option>
          <option value="Carrot">Carrot</option>
          <option value="Banana">Banana</option>
          <option value="Corn">Corn</option>
          <option value="Turmeric">Turmeric</option>
          <option value="Beans">Beans</option>
          {/* You can add more crops here */}
        </select>
      </div>

      <div>
        <label>Start Date of Crop: </label>
        <input type="date" onChange={handleStartDateChange} />
      </div>

      <div>
        <p>Current Growth Stage: {growthStage}</p>
        <p>{wateringReminder}</p>
      </div>

      <div>
        <button onClick={handleNavigate}>Next</button> {/* Navigate to next page */}
      </div>
    </div>
  );
};

export default DashboardPage;

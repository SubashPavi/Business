import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Corrected hook to useNavigate
import moment from "moment";
import './CropSelection.css'; // Add CSS for background

const CropSelection = () => {
  const { cropCategory } = useParams(); // Get the crop category from URL params
  const [startDate, setStartDate] = useState(""); // For storing the start date
  const [wateringReminder, setWateringReminder] = useState(""); // For storing the watering reminder
  const [fertilizerInfo, setFertilizerInfo] = useState(""); // Fertilizer info
  const [climateCondition, setClimateCondition] = useState(""); // Climate condition info
  const [seedType, setSeedType] = useState(""); // Seed type selection
  const navigate = useNavigate(); // For navigation

  // Based on cropCategory, update the background image and other crop-specific details
  const handleCropInfo = () => {
    switch (cropCategory) {
      case "carrot":
        setFertilizerInfo("Use Nitrogen-rich fertilizer during planting.");
        setClimateCondition("Carrots prefer cool weather.");
        break;
      case "wheat":
        setFertilizerInfo("Use a balanced NPK fertilizer for wheat.");
        setClimateCondition("Wheat prefers moderate temperatures (15-20°C).");
        break;
      case "rice":
        setFertilizerInfo("Use organic manure for rice cultivation.");
        setClimateCondition("Rice grows well in warm, flooded fields.");
        break;
      case "banana":
        setFertilizerInfo("Use a potassium-rich fertilizer for banana plants.");
        setClimateCondition("Bananas thrive in tropical climates with temperatures of 26-30°C.");
        break;
      case "corn":
        setFertilizerInfo("Apply balanced NPK fertilizers for optimal corn growth.");
        setClimateCondition("Corn prefers warm climates with temperatures between 20-30°C.");
        break;
      case "turmeric":
        setFertilizerInfo("Use organic manure and compost for turmeric.");
        setClimateCondition("Turmeric thrives in tropical climates with temperatures of 25-30°C.");
        break;
      case "beans":
        setFertilizerInfo("Beans fix their own nitrogen, minimal fertilizer needed.");
        setClimateCondition("Beans grow well in moderate temperatures (18-25°C) and well-drained soil.");
        break;
      default:
        setFertilizerInfo("General fertilizer: NPK 10-10-10.");
        setClimateCondition("Ideal temperature is 20-30°C.");
    }
  };

  useEffect(() => {
    handleCropInfo();
  }, [cropCategory]);

  const handleStartDateChange = (e) => {
    const date = e.target.value;
    setStartDate(date);

    if (date) {
      const wateringDate = moment(date).add(30, "days").format("MMMM Do YYYY");
      setWateringReminder(`Water crops on: ${wateringDate}`);
    }
  };

  const handleSubmit = () => {
    navigate(`/crop-reminder/${cropCategory}`); // Using navigate instead of history.push
  };

  // Dynamic background image
  const backgroundStyle = {
    backgroundImage: `url(/path/to/images/${cropCategory}.jpg)`, // Make sure the images exist
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh", // Full height background
  };

  return (
    <div className="crop-container" style={backgroundStyle}>
      <h2>{cropCategory.charAt(0).toUpperCase() + cropCategory.slice(1)} Crop Information</h2>
      <p><strong>Fertilizer Info:</strong> {fertilizerInfo}</p>
      <p><strong>Climate Condition:</strong> {climateCondition}</p>

      <label>Select Seed Type: </label>
      <select onChange={(e) => setSeedType(e.target.value)} value={seedType}>
        <option value="">Select</option>
        <option value="Hybrid">Hybrid</option>
        <option value="Non-Hybrid">Non-Hybrid</option>
      </select>

      <label>Select Planting Date: </label>
      <input type="date" onChange={handleStartDateChange} value={startDate} />

      <div>{wateringReminder}</div>
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
};

export default CropSelection;

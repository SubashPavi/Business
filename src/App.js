// Import necessary components and libraries
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Using Routes for v6
import LoginPage from './pages/LoginPage'; // Importing Login Page
import DashboardPage from './pages/DashboardPage'; // Importing Dashboard Page
import CropSelection from './pages/CropSelection'; // Importing Crop Selection Page
import CropReminder from './pages/CropReminder'; // Importing Crop Reminder Page
import './App.css'; // Global styles

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default route (LoginPage) */}
        <Route path="/" element={<LoginPage />} /> {/* This will render LoginPage at the root */}
        
        {/* Login Route */}
        <Route path="/login" element={<LoginPage />} /> {/* This route will render the LoginPage */}

        {/* Dashboard Route */}
        <Route path="/dashboard" element={<DashboardPage />} /> {/* This route will render the DashboardPage */}

        {/* Crop Selection Route */}
        <Route path="/crop-selection/:cropCategory" element={<CropSelection />} /> {/* Dynamic crop selection based on the category passed */}
        
        {/* Crop Reminder Route */}
        <Route path="/crop-reminder/:cropCategory" element={<CropReminder />} /> {/* Crop reminder page after selection */}
      </Routes>
    </Router>
  );
};

export default App;

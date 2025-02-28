// LoginPage.js
import React, { useState } from 'react';
import './LoginPage.css'; // Ensure you have this CSS file or remove this line if not needed

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
    if (username && password) {
      // Redirect to dashboard page after successful login
      window.location.href = '/dashboard'; // Use a redirect or navigate programmatically
    } else {
      alert("Please fill in both fields.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login to Farmer's Dashboard</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;

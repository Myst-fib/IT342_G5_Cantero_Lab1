import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Login.css';
import emailIcon from '../assets/email.png'
import passwordIcon from '../assets/password.png'

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        username: formData.username,
        password: formData.password,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      alert(error);
      return;
    }

    const user = await response.json();
    console.log("Logged in user:", user);

    // Store login flag (simple session marker)
    localStorage.setItem("isLoggedIn", "true");

    navigate("/dashboard");

  } catch (error) {
    console.error("Login error:", error);
    alert("Server error. Try again.");
  }
};


  const navigateToRegister = () => {
    navigate('/register');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <div className="input-with-icon">
              <img src={emailIcon} alt="Email Icon" className="input-icon" />
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                required
                
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-with-icon">
              <img src={passwordIcon} alt="Password Icon" className="input-icon" />
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>

        <div className="signup-link">
          <p>
            Don't have an account?{' '}
            <span className="clickable-link" onClick={navigateToRegister}>
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
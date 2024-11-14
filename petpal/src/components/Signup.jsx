import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleGoogleSignup = () => {
    window.location.href = "https://accounts.google.com/signin";
  };

  const handleFacebookSignup = () => {
    window.location.href = "https://www.facebook.com/login/";
  };

  return (
    <div className="signup-container fade-in">
      <div className="form-wrapper slide-up">
        <h2 className="title">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="input"
          />
          <button type="submit" className="button bounce">Sign Up</button>
        </form>
        <div className="divider">OR</div>
        <button
          type="button"
          className="social-button google zoom"
          onClick={handleGoogleSignup}
        >
          Sign up with Google
        </button>
        <button
          type="button"
          className="social-button facebook zoom"
          onClick={handleFacebookSignup}
        >
          Sign up with Facebook
        </button>
        <div className="login-redirect">
          <p>Already have an account?</p>
          <Link to="/login" className="login-link">
          <button type="button" className="login-button">
            Login
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;

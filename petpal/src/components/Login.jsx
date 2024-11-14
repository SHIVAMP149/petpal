import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
  };

  const handleGoogleLogin = () => {
    window.location.href = "https://accounts.google.com/signin";
  };

  const handleFacebookLogin = () => {
    window.location.href = "https://www.facebook.com/login/";
  };

  return (
    <div className="login-container fade-in">
      <div className="form-wrapper slide-up">
        <h2 className="title">Login</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit" className="button bounce">Login</button>
        </form>
        <div className="divider">OR</div>
        <button type="button" className="social-button google zoom" onClick={handleGoogleLogin}>
          Login with Google
        </button>
        <button type="button" className="social-button facebook zoom" onClick={handleFacebookLogin}>
          Login with Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;

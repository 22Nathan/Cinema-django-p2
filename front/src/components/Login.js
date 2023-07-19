import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with your login logic using formData.email and formData.password
    console.log('Login form submitted!');
  };

  return (
    <>
    <Navbar />
      <div className="login-container">
        <h1>Se connecter</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Se connecter</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;

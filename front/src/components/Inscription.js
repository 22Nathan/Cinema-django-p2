import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Inscription.css';

const Inscription = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    // 
    const res = await fetch('http://127.0.0.1:8000/register/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'username':formData.username,
        'password':formData.password
      })
    })
    if (res.ok) {
      alert( `code status : ${res.status} \nutilisateur : inscrit` )
      return await res.json()
    } else {
      // throw new Error('Request failed')
    }
    // 

  };

  return (
    <>
      <Navbar />
      <div className="inscription-container">
        <h1>Inscription</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
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
          {/* <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div> */}
          <button type="submit">Inscription</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Inscription;

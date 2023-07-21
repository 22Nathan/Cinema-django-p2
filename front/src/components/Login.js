import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
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
    const res = await fetch('http://127.0.0.1:8000/token/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'username':formData.username,
        'password':formData.password
      })
    })
    if (res.ok) {
      alert( `code status : ${res.status} \nutilisateur : connecté` )
      return await res.json()
    } else {
      alert( `code status : ${res.status} \nErreur` )
      // throw new Error('Request failed')
    }
    // 

  };

  return (
    <>
      <Navbar />
        <div className="login-container">
          <h1>Se connecter</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">username</label>
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
            <button type="submit">Se connecter</button>
          </form>
        </div>
      <Footer />
    </>
  );
};

export default Login;

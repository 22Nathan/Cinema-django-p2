import React from 'react';
import './Profil.css'
import Navbar from './Navbar';
import Footer from './Footer';

const Profil = () => {
  return (
    <>
    <Navbar />
    <div className="profil-container">
      <h1>Mon Profil</h1>
      <div className="profil-info">
        <div className="profil-details">
          <p>Nom: John Doe</p>
          <p>Âge: 30 ans</p>
          <p>Email: john.doe@example.com</p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Profil;

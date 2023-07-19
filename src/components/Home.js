import React from 'react';
import './Home.css'; // Assurez-vous de créer le fichier Home.css pour le style
import Navbar from './Navbar';

const Home = () => {
  return (
    <>
        <Navbar />
        <div className="home-container">
            <div className="brand-container">
                <img
                    className="brand-image"
                    src="/img/film_affiche.jpeg"
                    alt="Oppenheimer" />
            </div>

            <div className="main-content">
                <h1>Bienvenue au Cinéma !</h1>
                <p>Blablabla...</p>
            </div>
        </div>
    </>
  );
};

export default Home;

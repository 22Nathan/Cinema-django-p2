import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Home.css';
import './Footer.css';

const Home = () => {
  return (
    <>
        <Navbar />
        <div className="home-container">
            <div className="brand-container">
            <a className='link-img-home' href="https://www.youtube.com/watch?v=avz06PDqDbM">
                <img
                    className="brand-image"
                    src="/img/film_affiche_01.jpeg"
                    alt="Oppenheimer" />
            </a>
            <a className='link-img-home' href="https://www.youtube.com/watch?v=l4auZ8OtDm0">
                <img
                    className="brand-image"
                    src="/img/film_affiche_02.jpeg"
                    alt="Oppenheimer" />
            </a>
            <a className='link-img-home' href="https://www.youtube.com/watch?v=pBk4NYhWNMM">
                <img
                    className="brand-image"
                    src="/img/film_affiche_03.jpg"
                    alt="Oppenheimer" />
            </a>
            </div>

            <div className="main-content">
              <div className="content-block">
                <h1>Bienvenue à Cinérama !</h1>
                <p>Découvrez les dernières sorties cinématographiques, des films captivants dans une expérience de visionnage inégalée. Profitez de notre large sélection de films, des genres pour tous les goûts. Que vous soyez un amateur de drame, d'action, de comédie ou d'aventure, nous avons quelque chose pour vous. Notre cinéma offre une qualité d'image et de son exceptionnelle pour que vous puissiez vous plonger complètement dans l'histoire de chaque film. Ne manquez pas nos offres spéciales et événements exclusifs. Visitez-nous dès aujourd'hui et vivez une expérience cinématographique inoubliable !</p>
              </div>
            </div>
        </div>
        <Footer />
    </>
  );
};

export default Home;

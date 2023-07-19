import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import './FilmsPage.css';

const FilmsPage = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/films'); // Remplacez l'URL par l'API appropriée
        setFilms(response.data);
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des films :', error);
      }
    };

    fetchFilms();
  }, []);

  return (
    <>
    <Navbar />
    <div className="films-page">
          <div className="film-cards">
              {films.map((film) => (
                  <div key={film.ID_film} className="film-card">
                      <img src={film.image} alt={film.titre} className="film-image" />
                      <div className="film-info">
                          <h2 className="film-title">{film.titre}</h2>
                          <p className="film-summary">{film.resume}</p>
                          <p className="film-duration">Durée : {film.duree} minutes</p>
                          {film.estSpecial && <p className="film-special">Film spécial</p>}
                      </div>
                  </div>
              ))}
          </div>
      </div>
      <Footer />
      </>
  );
};

export default FilmsPage;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Seat from './Seat';
import Navbar from './Navbar';
import Footer from './Footer';
import './ReservationPage.css';
import axios from 'axios';
import CGPCalendarItem from './CGPCalendarItem'; // Importez le composant CGP-Calendar-Item


const ReservationPage = () => {
  const availableSeats = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3','A4', 'A5', 'A6', 'B4', 'B5', 'B6','A7', 'A8', 'A9', 'B7', 'B8', 'B9'];
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [seatPrice, setSeatPrice] = useState();

  const { filmId } = useParams();
  const [filmData, setFilmData] = useState(null); // État pour stocker les données du film

  useEffect(() => {
    const fetchFilmData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/film/infos/${filmId}`);
        console.log(response);
        setSeatPrice(response.data.seance_entries[0].prix);
        setFilmData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des données du film :', error);
        setLoading(false);
      }
    };

    fetchFilmData();
  }, [filmId]);

  const handleSeatSelection = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((selectedSeat) => selectedSeat !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handlePayment = () => {
    // Effectuez ici l'action de paiement souhaitée
    // Par exemple, rediriger l'utilisateur vers une page de paiement externe.
    // window.location.href = 'https://www.example.com/paiement'; // Exemple de redirection
    alert(`Redirigez l'utilisateur vers la page de paiement.`);
  };

  // console.log(filmData.seance_entries[0].prix);

  const totalPrice = selectedSeats.length * seatPrice

  return (
    <>
    <Navbar />
    <div className="reservation-page">
    <div className="cinema-image-container">
          {filmData ? (
            <img src={filmData.film.image} alt="Cinema" className="cinema-image" />
            ) : (
            <div>Loading...</div>
          )}
        </div>
        <div className="cgp-calendar-container">
          <h2>Calendrier des projections :</h2>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div>
              {filmData.seance_entries.map((seance) => (
                <CGPCalendarItem
                  key={seance.ID_seance}
                  film={filmData.film}
                  date={seance.date}
                  heure={seance.heure}
                  salle={seance.ID_salle.nom}
                />
              ))}
            </div>
          )}
        </div>
          <div className="reservation-content">
              <h2>Réservez votre place de cinéma</h2>
              <div>
                  <h3>Sélectionnez vos sièges :</h3>
                  <div className="seats-container">
                      {availableSeats.map((seat) => (
                          <Seat
                              key={seat}
                              seatNumber={seat}
                              isSelected={selectedSeats.includes(seat)}
                              onSelect={handleSeatSelection} />
                      ))}
                  </div>
              </div>
              <div className="summary">
                  <h3>Résumé de la réservation :</h3>
                  <div className="summary-list-container">
                      <ul className="summary-list">
                          {selectedSeats.map((seat) => (
                              <li key={seat}>{seat}</li>
                          ))}
                      </ul>
                  </div>
              </div>
              <div className='container-price'>
                  <div className="container-price">
                      <h3>Total à payer :</h3>
                      <button className="total-price" onClick={handlePayment}>{`$${totalPrice.toFixed(2)}`}</button>
                  </div>
              </div>
          </div>
      </div>
      <Footer/>
      </>
  );
};

export default ReservationPage;

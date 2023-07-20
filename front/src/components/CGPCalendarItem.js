import React from 'react';
import './CGPCalendarItem.css'

const CGPCalendarItem = ({ film, date, heure, salle, isItemSelected, handleItemClick }) => {
  return (
    <div
      className={`cgp-calendar-item ${isItemSelected ? 'selected' : ''}`}
      onClick={handleItemClick}
    >
      <h3 className="film-title-reservation">{film.titre}</h3>
      <p className="film-duration">Durée : {film.duree} minutes</p>
      <p className="projection-date">Date : {date}</p>
      <p className="projection-time">Heure : {heure}</p>
      <p className="projection-hall">Salle : {salle}</p>
    </div>
  );
};

export default CGPCalendarItem;

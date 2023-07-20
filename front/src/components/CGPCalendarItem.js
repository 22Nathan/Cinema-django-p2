import React, { useState } from 'react';
import './CGPCalendarItem.css'

const CGPCalendarItem = ({ film, date, heure, salle }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleItemClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div
      className={`cgp-calendar-item ${isSelected ? 'selected' : ''}`}
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

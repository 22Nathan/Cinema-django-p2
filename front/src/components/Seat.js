import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCouch } from '@fortawesome/free-solid-svg-icons';

const Seat = ({ seatNumber, isSelected, onSelect }) => {
  const seatStyle = {
    width: '25px',
    height: '25px',
    margin: '5px',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: isSelected ? '#00E511' : '#FFC500',
    cursor: 'pointer',
    userSelect: 'none',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  return (
    <div style={seatStyle} onClick={() => onSelect(seatNumber)}>
      <FontAwesomeIcon icon={faCouch} />
    </div>
  );
};

export default Seat;

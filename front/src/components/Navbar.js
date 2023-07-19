import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Logo ou nom de votre cinéma
      </Link>
      <ul className="nav-links">
        <li className="nav-item">
          <Link to="/films" className="nav-link">
            Films
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/prochainement" className="nav-link">
            Prochainement
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

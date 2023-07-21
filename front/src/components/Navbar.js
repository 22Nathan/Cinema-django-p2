import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <img src="/img/logo.png" alt="Logo du cinéma" className="navbar-logo" />
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/films" className="nav-link">
            Films
          </Link>
        </li>
      </ul>
      <ul className="navbar-auth">
      <li className="nav-item">
          <Link to="/profil" className="nav-link">
            Profil
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Se connecter
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/inscription" className="nav-link">
            Inscription
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

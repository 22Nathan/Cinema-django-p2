import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Link to="/contact" className="footer-link">
          Contact
        </Link>
        
        <Link to="/privacy-policy" className="footer-link">
          Politique de confidentialité
        </Link>
      </div>

      <div className="footer-copyright">
        © {new Date().getFullYear()} Cinérama - Tous droits réservés
      </div>
    </footer>
  );
};

export default Footer;

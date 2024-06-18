import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="main-header">
      <img src="/logo.svg" alt="Super Cursos Logo" className="main-logo" />
      <div className="header-icons">
        <Link to="/perfil"><img src="/perfil.svg" alt="Perfil" className="profile-icon" /></Link>
      </div>
    </header>
  );
}

export default Header;

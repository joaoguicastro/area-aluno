import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="main-header">
        <img src="/logo.svg" alt="Super Cursos Logo" className="main-logo" />
        <div className="header-icons">
          <img src="/perfil.svg" alt="Perfil" className="profile-icon" />
        </div>
      </header>
      <aside className="sidebar">
        <nav>
          <ul>
            <li><Link to="/home"><img src="/home.svg" alt="Home" className="icon" /></Link></li>
            <li><Link to="/financeiro"><img src="/financeiro.svg" alt="Financeiro" className="icon" /></Link></li>
            <li><Link to="/presenca"><img src="/presenca.svg" alt="Presença" className="icon" /></Link></li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="header">
          <i className="bell-icon"></i>
        </header>
        <h1>Meus Cursos:</h1>
        <div className="courses">
          <div className="course-card">
            <p>Presencial</p>
            <img src="/curso.svg" alt="Matemática" />
            <div className="course-details">
              <span>Terça e Sexta</span>
              <span>10:30</span>
            </div>
          </div>
          <div className="course-card">
            <p>Online</p>
            <img src="/curso.svg" alt="Matemática" />
            <div className="course-details">
              <span>Segunda e Quarta</span>
              <span>18:30</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;

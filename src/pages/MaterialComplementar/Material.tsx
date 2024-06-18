import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Material.css';

function MaterialComplementar() {
  return (
    <div className="material-complementar-container">
      <Header />
      <Sidebar />
      <main className="main-content">
        <div className="course-menu">
          <ul>
            <li><Link to="#videoaulas">VIDEOAULAS</Link></li>
            <li><Link to="#material-de-estudos">MATERIAL DE ESTUDOS</Link></li>
            <li><Link to="/curso">PERCURSO DE APRENDIZAGEM</Link></li>
            <li><Link to="/material-complementar">MATERIAL COMPLEMENTAR</Link></li>
          </ul>
        </div>
        <h1>Material Complementar</h1>
        <div className="description-banner">
          <p>Aqui ficam todas as suas apostilas e materiais complementares</p>
          <div className="course-teacher">
            <img src="/perfil.svg" alt="Professor" />
            <p>Professor<br/>Nome do professor</p>
            <button className="btn-duvidas">Tira dúvidas</button>
          </div>
        </div>
        <div className="material-sections">
          <div className="material-section">
            <h2>Apostilas</h2>
            <button className="material-button">Apostila 1</button>
            <button className="material-button">Apostila 2</button>
            <button className="material-button">Apostila 3</button>
            <button className="material-button">Apostila 4</button>
          </div>
          <div className="material-section">
            <h2>Provas</h2>
            <button className="material-button">Prova 1</button>
            <button className="material-button">Prova 2</button>
            <button className="material-button">Prova 3</button>
            <button className="material-button">Prova 4</button>
          </div>
          <div className="material-section">
            <h2>Material Complementar</h2>
            <button className="material-button">Material</button>
            <button className="material-button">Material</button>
            <button className="material-button">Material</button>
            <button className="material-button">Material</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MaterialComplementar;

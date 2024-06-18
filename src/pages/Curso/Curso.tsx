import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Curso.css';

function Curso() {
  return (
    <div className="curso-container">
      <Header />
      <Sidebar />
      <main className="main-content">
        <div className="course-menu">
          <ul>
            <li><a href="#videoaulas">VIDEOAULAS</a></li>
            <li><a href="#material-de-estudos">MATERIAL DE ESTUDOS</a></li>
            <li><a href="#percurso-de-aprendizagem">PERCURSO DE APRENDIZAGEM</a></li>
            <li><Link to="/material-complementar">MATERIAL COMPLEMENTAR</Link></li>
          </ul>
        </div>
        <div className="course-header">
          <h1>Curso de Python</h1>
          <div className="course-info">
            <div className="course-banner">
              <p>Vamos aprender Python juntos, se junte-se nessa jornada para aprender com os melhores!</p>
              <div className="course-teacher">
                <img src="/perfil.svg" alt="nome Professor" />
                <p>Professor<br/>Nome do Professor</p>
              </div>
              <button className="btn-duvidas">Tira dúvidas</button>
            </div>
          </div>
        </div>
        <div className="course-content">
          <h2>Percurso de aprendizagem</h2>
          <p>Explore seus conhecimentos!</p>
          <div className="course-paths">
            <button className="btn-path">Percurso 1</button>
            <button className="btn-path">Percurso 2</button>
            <button className="btn-path">Percurso 3</button>
            <button className="btn-path">Percurso 4</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Curso;

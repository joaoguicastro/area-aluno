import React from 'react';
import Header from '../../../components/Header/Header';
import Sidebar from '../../../components/Sidebar/Sidebar';
import './MaterialEstudo.css';
import { useNavigate } from 'react-router-dom';

function MaterialEstudo() {

    const navigate = useNavigate();

  const handleCourseClick = () => {
    navigate('/material-complementar');
  };
  const handleCourseClick2 = () => {
    navigate('/material-estudo');
  };
  return (
    <div className="material-estudos-container">
      <Header />
      <Sidebar />
      <main className="main-content">
        <div className="tabs">
          <button onClick={handleCourseClick2} className="tab">Material de Estudos</button>
          <button onClick={handleCourseClick} className="tab">Material Complementar</button>
        </div>
        <h1>Bombeiro Mirim</h1>
        <div className="curso-info">
          <div className="professor-info">
            <div className="professor-details">
              <p>Vamos Aprender juntos</p>
              <div className="professor">
                <img src="/public/perfil.svg" alt="Professor Icon" />
                <div>
                  <p className="professor-name">Professor</p>
                  <p className="professor-fullname">Nome Do Professor</p>
                </div>
              </div>
              <button className="tira-duvidas-button">
                Tira dúvidas
              </button>
            </div>
          </div>
          <div className="links-container">
            <p>Links de aulas para você assistir</p>
            <div className="links-list">
              <div className="link">Aula 1</div>
              <div className="link">Aula 2</div>
              <div className="link">Aula 3</div>
              <div className="link">Aula 4</div>
              <div className="link">Aula 5</div>
              <div className="link">Aula 6</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MaterialEstudo;

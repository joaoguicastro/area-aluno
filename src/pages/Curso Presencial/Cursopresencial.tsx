import React from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Cursopresencial.css';
import { useNavigate } from 'react-router-dom';

function CursoPresencial() {

    const navigate = useNavigate();

  const handleCourseClick = () => {
    navigate('/material-complementar');
  };
  const handleCourseClick2 = () => {
    navigate('/material-estudo');
  };
  return (
    <div className="curso-presencial-container">
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
          <div className="video-container">
            <p>Video de iniciação do curso</p>
            <video controls>
              <source src="/public/video/KR Informática e Idiomas,oficial.mp4" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CursoPresencial;

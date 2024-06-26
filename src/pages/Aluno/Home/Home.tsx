import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import Sidebar from '../../../components/Sidebar/Sidebar';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const handleCourseClick = () => {
    navigate('/curso');
  };
  const handleCourseClick2 = () => {
    navigate('/cursopresencial');
  };

  return (
    <div className="home-container">
      <Header />
      <Sidebar />
      <main className="main-content">
        <header className="header">
          <i className="bell-icon"></i>
        </header>
        <h1>Meus Cursos:</h1>
        <div className="courses">
          <div className="course-card" onClick={handleCourseClick2}>
            <p>Presencial</p>
            <img src="/curso.svg" alt="Matemática" />
            <div className="course-details">
              <span>Terça e Sexta</span>
              <span>10:30</span>
            </div>
          </div>
          <div className="course-card" onClick={handleCourseClick}>
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

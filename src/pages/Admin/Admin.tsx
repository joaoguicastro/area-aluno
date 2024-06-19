import React from 'react';
import Header from '../../components/Header/Header';
import SidebarAdm from '../../components/Sidebar Admin/SidebarAdm';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

function Admin() {
    const navigate = useNavigate();

    const handleCourseClick = () => {
        navigate('/apostila');
      };

      const handleCourseClick2 = () => {
        navigate('/notas');
      };
      const handleCourseClick3 = () => {
        navigate('/material');
      };
  return (
    <div className="admin-container">
      <Header />
      <SidebarAdm />
      <main className="main-content">
        <h1>Painel Administrador</h1>
        <div className="admin-actions">
          <button onClick={handleCourseClick} className="admin-button">Adicionar Apostilas</button>
          <button onClick={handleCourseClick2} className="admin-button">Adicionar Notas</button>
          <button onClick={handleCourseClick3} className="admin-button">Adicionar Material Complementar</button>
        </div>
      </main>
    </div>
  );
}

export default Admin;

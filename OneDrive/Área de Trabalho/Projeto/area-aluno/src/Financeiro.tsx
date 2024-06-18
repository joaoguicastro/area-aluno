import React from 'react';
import { Link } from 'react-router-dom';
import './Financeiro.css';

function Financeiro() {
  return (
    <div className="finance-container">
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
        <h1>Extrato Financeiro</h1>
        <div className="filter">
          <label htmlFor="course">Curso</label>
          <select id="course" name="course">
            <option value="python">Curso de Python</option>
            {/* Adicione mais opções conforme necessário */}
          </select>
        </div>
        <div className="period">Período: 2024.1</div>
        <table className="finance-table">
          <thead>
            <tr>
              <th>Matrícula</th>
              <th>Competência</th>
              <th>Vencimento</th>
              <th>Situação</th>
              <th>Valor (R$)</th>
              <th>Pagador</th>
            </tr>
          </thead>
          <tbody>
            <tr className="paid">
              <td>02310</td>
              <td>Jan/2024</td>
              <td>05/01/2024</td>
              <td>Pago</td>
              <td>R$1.300,59</td>
              <td>CPF 043.421.420-54 - Fulano Joaquim Neto da Silva Ribeiro</td>
            </tr>
            <tr className="paid">
              <td>03210</td>
              <td>Fev/2024</td>
              <td>05/02/2024</td>
              <td>Pago</td>
              <td>R$1.300,59</td>
              <td>CPF 043.421.420-54 - Fulano Joaquim Neto da Silva Ribeiro</td>
            </tr>
            {/* Adicione mais linhas conforme necessário */}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default Financeiro;

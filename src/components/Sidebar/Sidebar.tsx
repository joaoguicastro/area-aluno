import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><Link to="/home"><img src="/home.svg" alt="Home" className="icon" /></Link></li>
          <li><Link to="/financeiro"><img src="/financeiro.svg" alt="Financeiro" className="icon" /></Link></li>
          <li><Link to="/presenca"><img src="/presenca.svg" alt="Presença" className="icon" /></Link></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;

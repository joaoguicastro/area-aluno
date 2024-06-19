import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarAdm.css';

function Sidebar() {
  return (
    <aside className="sidebaradm">
      <nav>
        <ul>
          <li><Link to="/admin"><img src="/home.svg" alt="Home" className="icon" /></Link></li>
          <li><Link to="/apostila"><img src="/apostila.svg" alt="apostilas" className="icon" /></Link></li>
          <li><Link to="/nota"><img src="/nota.svg" alt="notas" className="icon" /></Link></li>
          <li><Link to="/material"><img src="/material.svg" alt="material" className="icon" /></Link></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;

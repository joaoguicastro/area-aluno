import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarProf.css';

function Sidebarprof() {
  return (
    <aside className="sidebarprof">
      <nav>
        <ul>
          <li><Link to="/professor"><img src="/home.svg" alt="Home" className="icon" /></Link></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebarprof;

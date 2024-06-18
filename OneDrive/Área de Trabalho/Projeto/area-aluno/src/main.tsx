import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Financeiro from './Financeiro';
import Presenca from './Presenca';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/financeiro" element={<Financeiro />} />
        <Route path="/presenca" element={<Presenca />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);

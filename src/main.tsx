import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './pages/Home/Home';
import Financeiro from './pages/Financeiro/Financeiro';
import Presenca from './pages/Presenca/Presenca';
import Perfil from './pages/Perfil/Perfil';
import Curso from './pages/Curso/Curso';
import MaterialComplementar from './pages/MaterialComplementar/Material';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/financeiro" element={<Financeiro />} />
        <Route path="/presenca" element={<Presenca />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/curso" element={<Curso />} />
        <Route path="/material-complementar" element={<MaterialComplementar />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);

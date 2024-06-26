import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './pages/Aluno/Home/Home';
import Financeiro from './pages/Administrador/Financeiro/Financeiro';
import Presenca from './pages/Aluno/Presenca/Presenca';
import Perfil from './pages/Aluno/Perfil/Perfil';
import Curso from './pages/Aluno/Curso/Curso';
import MaterialComplementar from './pages/Aluno/MaterialComplementar/Material';
import Admin from './pages/Administrador/Admin/Admin';
import Apostila from './pages/Administrador/Apostila/Apostila';
import Material from './pages/Administrador/Material/Material';
import Nota from './pages/Administrador/Notas/Nota';
import CursoPresencial from './pages/Aluno/Curso Presencial/Cursopresencial';
import MaterialEstudo from './pages/Aluno/Material Estudo/MaterialEstudo';
import EnviarMensagem from './pages/Aluno/EnvioMensagem/Mensagem';
import ProfessorDashboard from './pages/Professor/Dashboard/Professor';
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
        <Route path='/admin' element={<Admin />} />
        <Route path='/apostila' element={<Apostila />} />
        <Route path='/material' element={<Material />} />
        <Route path='/nota' element={<Nota />} />
        <Route path='/cursopresencial' element={<CursoPresencial />} />
        <Route path='/material-estudo' element={<MaterialEstudo />} />
        <Route path='/envio-mensagem' element={<EnviarMensagem />} />
        <Route path='/professor' element={<ProfessorDashboard />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);

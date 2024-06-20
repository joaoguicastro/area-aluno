import React, { useState } from 'react';
import Header from '../../../components/Header/Header';
import SidebarAdm from '../../../components/Sidebar Admin/SidebarAdm';
import './Apostila.css';

function AdicionarApostila() {
  const [apostilas, setApostilas] = useState<string[]>([
    'Apostila 1',
    'Apostila 2',
    'Apostila 3',
    'Apostila 4',
    'Apostila 5',
    'Apostila 6',
    'Apostila 7',
    'Apostila 8',
    'Apostila 9',
    'Apostila 10'
  ]);

  const adicionarApostila = () => {
    setApostilas([...apostilas, `Apostila ${apostilas.length + 1}`]);
  };

  return (
    <div className="adicionar-apostila-container">
      <Header />
      <SidebarAdm />
      <main className="main-content">
        <h1>Adicionar Apostila</h1>
        <div className="form-container">
          <label htmlFor="curso">Curso</label>
          <select id="curso" name="curso">
            <option value="python">Curso de Python</option>
          </select>
          <h2>Apostilas adicionadas a esse curso</h2>
          <div className="apostilas-list">
            {apostilas.map((apostila, index) => (
              <div key={index} className="apostila-item">
                {apostila}
              </div>
            ))}
            <button className="add-icon" onClick={adicionarApostila}>
              <img src="/public/add.svg" alt="Adicionar Apostila" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdicionarApostila;

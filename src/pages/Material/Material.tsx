import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import SidebarAdm from '../../components/Sidebar Admin/SidebarAdm';
import './Material.css';

function Material() {
  const [apostilas, setApostilas] = useState<string[]>([
    'Material 1',
    'Material 2',
    'Material 3',
    'Material 4',
    'Material 5',
    'Material 6',
    'Material 7',
    'Material 8',
    'Material 9',
    'Material 10'
  ]);

  const adicionarMaterial = () => {
    setApostilas([...apostilas, `Material ${apostilas.length + 1}`]);
  };

  return (
    <div className="adicionar-apostila-container">
      <Header />
      <SidebarAdm />
      <main className="main-content">
        <h1>Adicionar Material</h1>
        <div className="form-container">
          <label htmlFor="curso">Curso</label>
          <select id="curso" name="curso">
            <option value="python">Curso de Python</option>
          </select>
          <h2>Materiais adicionadas a esse curso</h2>
          <div className="apostilas-list">
            {apostilas.map((apostila, index) => (
              <div key={index} className="apostila-item">
                {apostila}
              </div>
            ))}
            <button className="add-icon" onClick={adicionarMaterial}>
              <img src="./add.svg" alt="Adicionar Apostila" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Material;

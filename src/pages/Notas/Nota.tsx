import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import SidebarAdm from '../../components/Sidebar Admin/SidebarAdm';
import './Nota.css';

const materiasIniciais = [
  { materia: 'Matéria 1', notas: ['Nota 1', 'Nota 2', 'Nota 3'] },
  { materia: 'Matéria 2', notas: ['Nota 1', 'Nota 2', 'Nota 3'] },
  { materia: 'Matéria 3', notas: ['Nota 1', 'Nota 2', 'Nota 3'] },
  { materia: 'Matéria 4', notas: ['Nota 1', 'Nota 2', 'Nota 3'] },
];

function AdicionarNota() {
  const [aluno, setAluno] = useState('');
  const [materias, setMaterias] = useState(materiasIniciais);
  const [novaNota, setNovaNota] = useState('');
  const [materiaSelecionada, setMateriaSelecionada] = useState('');
  const [notaIndex, setNotaIndex] = useState(0);
  const [pesquisaRealizada, setPesquisaRealizada] = useState(false);
  const [erroPesquisa, setErroPesquisa] = useState('');

  const handleAlunoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAluno(e.target.value);
  };

  const handleNovaNotaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNovaNota(e.target.value);
  };

  const handleMateriaSelecionadaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMateriaSelecionada(e.target.value);
  };

  const handleNotaIndexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = parseInt(e.target.value) - 1;
    setNotaIndex(isNaN(index) ? 0 : index);
  };

  const realizarPesquisa = () => {
    if (aluno.toLowerCase() === 'joao guilherme') {
      setPesquisaRealizada(true);
      setErroPesquisa('');
    } else {
      setPesquisaRealizada(false);
      setErroPesquisa('Não foi possível encontrar o aluno.');
    }
  };

  const adicionarNota = () => {
    setMaterias(materias.map(materia => {
      if (materia.materia === materiaSelecionada) {
        const novasNotas = [...materia.notas];
        novasNotas[notaIndex] = novaNota;
        return { ...materia, notas: novasNotas };
      }
      return materia;
    }));
    setNovaNota('');
    setMateriaSelecionada('');
    setNotaIndex(0);
  };

  return (
    <div className="adicionar-nota-container">
      <Header />
      <SidebarAdm />
      <main className="main-content">
        <h1>Adicionar nota a aluno</h1>
        <div className="form-container">
          <label htmlFor="buscar-aluno">Buscar aluno:</label>
          <input
            type="text"
            id="buscar-aluno"
            value={aluno}
            onChange={handleAlunoChange}
          />
          <button onClick={realizarPesquisa} className="search-button">Pesquisar</button>
          {erroPesquisa && <p className="erro">{erroPesquisa}</p>}
          {pesquisaRealizada && (
            <>
              <label htmlFor="curso">Curso</label>
              <select id="curso" name="curso">
                <option value="python">Curso de Python</option>
                {/* Adicione mais opções de curso conforme necessário */}
              </select>
              <h2>Notas atuais</h2>
              <div className="notas-list">
                {materias.map((materia, index) => (
                  <div key={index} className="materia-item">
                    <h3>{materia.materia}</h3>
                    {materia.notas.map((nota, notaIndex) => (
                      <div key={notaIndex} className="nota-item">
                        {nota}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div className="adicionar-nota">
                <label htmlFor="materia">Selecionar matéria:</label>
                <select
                  id="materia"
                  value={materiaSelecionada}
                  onChange={handleMateriaSelecionadaChange}
                >
                  <option value="">Selecione uma matéria</option>
                  {materias.map((materia, index) => (
                    <option key={index} value={materia.materia}>
                      {materia.materia}
                    </option>
                  ))}
                </select>
                <label htmlFor="nota-index">Número da nota (1, 2 ou 3):</label>
                <input
                  type="number"
                  id="nota-index"
                  min="1"
                  max="3"
                  value={notaIndex + 1}
                  onChange={handleNotaIndexChange}
                />
                <label htmlFor="nova-nota">Adicionar nota:</label>
                <input
                  type="text"
                  id="nova-nota"
                  value={novaNota}
                  onChange={handleNovaNotaChange}
                />
                <button className="add-icon" onClick={adicionarNota}>
                  <img src="/public/addnota.svg" alt="Adicionar Nota" />
                </button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default AdicionarNota;

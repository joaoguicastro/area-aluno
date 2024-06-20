import React, { useState } from 'react';
import Header from '../../../components/Header/Header';
import Sidebarprof from '../../../components/Sidebar Professor/SidebarProf';
import './Professor.css';

const alunosMock = [
  { nome: 'Joao Guilherme', notas: { materia1: 9, materia2: 8, materia3: 7 } },
  { nome: 'Maria Silva', notas: { materia1: 7, materia2: 6, materia3: 9 } },
  // Adicione mais alunos conforme necessário
];

const mensagensMock = [
  { aluno: 'Joao Guilherme', mensagem: 'Tenho uma dúvida sobre a matéria 1.' },
  { aluno: 'Maria Silva', mensagem: 'Quando será a próxima prova?' },
  // Adicione mais mensagens conforme necessário
];

function ProfessorDashboard() {
  const [nomeAluno, setNomeAluno] = useState('');
  const [alunoSelecionado, setAlunoSelecionado] = useState<any>(null);

  const buscarAluno = () => {
    const aluno = alunosMock.find(a => a.nome.toLowerCase() === nomeAluno.toLowerCase());
    setAlunoSelecionado(aluno || null);
  };

  return (
    <div className="professor-dashboard-container">
      <Header />
      <Sidebarprof />
      <main className="main-content">
        <h1>Painel do Professor</h1>
        <div className="busca-aluno">
          <input
            type="text"
            value={nomeAluno}
            onChange={(e) => setNomeAluno(e.target.value)}
            placeholder="Buscar aluno por nome..."
          />
          <button onClick={buscarAluno}>Buscar</button>
        </div>
        {alunoSelecionado && (
          <div className="notas-aluno">
            <h2>Notas de {alunoSelecionado.nome}</h2>
            <ul>
              {Object.keys(alunoSelecionado.notas).map((materia, index) => (
                <li key={index}>
                  {materia}: {alunoSelecionado.notas[materia]}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="mensagens">
          <h2>Mensagens dos alunos</h2>
          <ul>
            {mensagensMock.map((mensagem, index) => (
              <li key={index}>
                <strong>{mensagem.aluno}:</strong> {mensagem.mensagem}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default ProfessorDashboard;

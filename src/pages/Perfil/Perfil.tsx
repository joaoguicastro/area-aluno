import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Perfil.css';

function Perfil() {
  return (
    <div className="perfil-container">
      <Header />
      <Sidebar />
      <main className="main-content">
        <div className="perfil-details">
          <div className="perfil-avatar">
            <img src="/perfil.svg" alt="Perfil" />
            <p>Leonardo de Saboia Correa Ponte Souza</p>
          </div>
          <div className="perfil-info">
            <h2>Detalhes do usuário</h2>
            <p><strong>Nome:</strong> Fulano Joaquim Neto da Silva Ribeiro</p>
            <p><strong>CPF:</strong> 043.123.502-45</p>
            <p><strong>Email:</strong> leonardodesaboia@edu.unifor.br</p>
            <button>Redefinir Senha</button>
          </div>
        </div>
        <div className="perfil-courses">
          <h2>Cursos ativos</h2>
          <div className="curso-ativo">
            <h3>Cursando:</h3>
            <p>Aprendendo Java <span>37% concluído</span></p>
          </div>
          <div className="curso-finalizado">
            <h3>Cursos finalizados:</h3>
            <p>Aprendendo Python <span>✔</span></p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Perfil;

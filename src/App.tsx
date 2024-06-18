import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();

  const passarTela = (e: React.FormEvent) => {
    e.preventDefault();
    const cpfInput = document.getElementById('cpf') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;

    if (cpfInput.value === '02887352342' && passwordInput.value === '123456') {
      navigate('/home');
    } else {
      alert('Usuário ou senha inválidos');
    }
  };

  return (
    <div className="container">
      <div className="login-box">
        <img src="../public/logo.svg" alt="Super Cursos Logo" className="logo" />
        <h2>Acesso a área do aluno</h2>
        <p>Preencha os dados abaixo para ter acesso.</p>
        <form onSubmit={passarTela}>
          <label htmlFor="cpf">CPF:</label>
          <input type="text" id="cpf" name="cpf" placeholder="Digite seu CPF" required />

          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" name="password" placeholder="Digite sua senha" required />

          <button type="submit" className="login-button">Acessar</button>
        </form>
        <a href="#" className="forgot-password">Recuperar a senha</a>
      </div>
      <div className="image-container">
        <img src="../public/imagem.svg" alt="Typing on keyboard" className="side-image" />
      </div>
    </div>
  );
}

export default App;

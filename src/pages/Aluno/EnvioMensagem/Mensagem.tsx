import React, { useState } from 'react';
import Header from '../../../components/Header/Header';
import Sidebar from '../../../components/Sidebar/Sidebar';
import './Mensagem.css';

function EnviarMensagem() {
  const [mensagem, setMensagem] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [feedback, setFeedback] = useState('');

  const enviarMensagem = async () => {
    setEnviando(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFeedback('Mensagem enviada com sucesso!');
    } catch (error) {
      setFeedback('Erro ao enviar mensagem.');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="enviar-mensagem-container">
      <Header />
      <Sidebar />
      <main className="main-content">
        <h1>Enviar Mensagem para o Professor</h1>
        <div className="mensagem-form">
          <textarea
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            placeholder="Digite sua mensagem aqui..."
            rows={10}
          ></textarea>
          <button onClick={enviarMensagem} disabled={enviando}>
            {enviando ? 'Enviando...' : 'Enviar'}
          </button>
          {feedback && <p className="feedback">{feedback}</p>}
        </div>
      </main>
    </div>
  );
}

export default EnviarMensagem;

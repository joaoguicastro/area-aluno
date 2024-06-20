import React from 'react';
import Header from '../../../components/Header/Header';
import Sidebar from '../../../components/Sidebar/Sidebar';
import './Financeiro.css';

function Financeiro() {
  return (
    <div className="finance-container">
      <Header />
      <Sidebar />
      <main className="main-content">
        <h1>Extrato Financeiro</h1>
        <div className="filter">
          <label htmlFor="course">Curso</label>
          <select id="course" name="course">
            <option value="python">Curso de Python</option>
            {/* Adicione mais opções conforme necessário */}
          </select>
        </div>
        <div className="period">Período: 2024.1</div>
        <table className="finance-table">
          <thead>
            <tr>
              <th>Matrícula</th>
              <th>Competência</th>
              <th>Vencimento</th>
              <th>Situação</th>
              <th>Valor (R$)</th>
              <th>Pagador</th>
            </tr>
          </thead>
          <tbody>
            <tr className="paid">
              <td>02310</td>
              <td>Jan/2024</td>
              <td>05/01/2024</td>
              <td>Pago</td>
              <td>R$1.300,59</td>
              <td>CPF 043.421.420-54 - Fulano Joaquim Neto da Silva Ribeiro</td>
            </tr>
            <tr className="paid">
              <td>03210</td>
              <td>Fev/2024</td>
              <td>05/02/2024</td>
              <td>Pago</td>
              <td>R$1.300,59</td>
              <td>CPF 043.421.420-54 - Fulano Joaquim Neto da Silva Ribeiro</td>
            </tr>
            <tr className="paid">
              <td>49312</td>
              <td>Mar/2024</td>
              <td>05/03/2024</td>
              <td>Pago</td>
              <td>R$1.300,59</td>
              <td>CPF 043.421.420-54 - Fulano Joaquim Neto da Silva Ribeiro</td>
            </tr>
            <tr className="overdue">
              <td>94921</td>
              <td>Abr/2024</td>
              <td>05/04/2024</td>
              <td>Atrasado</td>
              <td>R$1.300,59</td>
              <td>CPF 043.421.420-54 - Fulano Joaquim Neto da Silva Ribeiro</td>
            </tr>
            <tr className="paid">
              <td>85192</td>
              <td>Mai/2024</td>
              <td>05/05/2024</td>
              <td>Pago</td>
              <td>R$1.300,59</td>
              <td>CPF 043.421.420-54 - Fulano Joaquim Neto da Silva Ribeiro</td>
            </tr>
            <tr className="overdue">
              <td>21234</td>
              <td>Jun/2024</td>
              <td>05/06/2024</td>
              <td>Atrasado</td>
              <td>R$1.300,59</td>
              <td>CPF 043.421.420-54 - Fulano Joaquim Neto da Silva Ribeiro</td>
            </tr>
            <tr className="paid">
              <td>02310</td>
              <td>Jul/2024</td>
              <td>05/07/2024</td>
              <td>Pago</td>
              <td>R$1.300,59</td>
              <td>CPF 043.421.420-54 - Fulano Joaquim Neto da Silva Ribeiro</td>
            </tr>
            <tr className="paid">
              <td>95812</td>
              <td>Ago/2024</td>
              <td>05/08/2024</td>
              <td>Pago</td>
              <td>R$1.300,59</td>
              <td>CPF 043.421.420-54 - Fulano Joaquim Neto da Silva Ribeiro</td>
            </tr>
            <tr className="paid">
              <td>91123</td>
              <td>Set/2024</td>
              <td>05/09/2024</td>
              <td>Pago</td>
              <td>R$1.300,59</td>
              <td>CPF 043.421.420-54 - Fulano Joaquim Neto da Silva Ribeiro</td>
            </tr>
            <tr className="overdue">
              <td>49101</td>
              <td>Out/2024</td>
              <td>05/10/2024</td>
              <td>Atrasado</td>
              <td>R$1.300,59</td>
              <td>CPF 043.421.420-54 - Fulano Joaquim Neto da Silva Ribeiro</td>
            </tr>
            <tr className="pending">
              <td>01231</td>
              <td>Nov/2024</td>
              <td>05/11/2024</td>
              <td>Pendente</td>
              <td>R$1.300,59</td>
              <td>CPF 043.421.420-54 - Fulano Joaquim Neto da Silva Ribeiro</td>
            </tr>
            <tr className="pending">
              <td>11231</td>
              <td>Dez/2024</td>
              <td>05/12/2024</td>
              <td>Pendente</td>
              <td>R$1.300,59</td>
              <td>CPF 043.421.420-54 - Fulano Joaquim Neto da Silva Ribeiro</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default Financeiro;

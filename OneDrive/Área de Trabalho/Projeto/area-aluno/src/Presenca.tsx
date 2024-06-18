import { useState } from 'react';
import './Presenca.css';

function Presenca() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [presencas, setPresencas] = useState<{ [key: string]: boolean }>({});

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  const handleConfirmPresence = () => {
    if (selectedDate) {
      const dateKey = selectedDate.toDateString();
      setPresencas({ ...presencas, [dateKey]: true });
      setSelectedDate(null);
    }
  };

  const renderDay = (date: Date) => {
    const dateKey = (date as Date).toDateString();
    const isPresent = presencas[dateKey];

    return (
      <td
        key={date.getDate()}
        className={isPresent ? 'present' : ''}
        onClick={() => handleDateClick(date)}
      >
        {date.getDate()}
      </td>
    );
  };

  const renderCalendar = () => {
    const startDate = new Date(2024, 1, 1);
    const endDate = new Date(2024, 1, 29);
    const dates = [];

    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      dates.push(new Date(d));
    }

    const weeks = [];
    let week: JSX.Element[] = [];

    dates.forEach((date) => {
      if (date.getDay() === 0 && week.length) {
        weeks.push(<tr key={date.toDateString()}>{week}</tr>);
        week = [];
      }
      week.push(renderDay(date));
    });

    if (week.length) {
      weeks.push(<tr key={dates.toString()}>{week}</tr>);
    }

    return weeks;
  };

  return (
    <div className="presenca-container">
      <header className="main-header">
        <img src="/logo.svg" alt="Super Cursos Logo" className="main-logo" />
        <div className="header-icons">
          <img src="/perfil.svg" alt="Perfil" className="profile-icon" />
        </div>
      </header>
      <aside className="sidebar">
        <nav>
          <ul>
            <li><a href="/home"><img src="/home.svg" alt="Home" className="icon" /></a></li>
            <li><a href="/financeiro"><img src="/financeiro.svg" alt="Financeiro" className="icon" /></a></li>
            <li><a href="/presenca"><img src="/presenca.svg" alt="Presença" className="icon" /></a></li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <h1>Presença</h1>
        <div className="filter">
          <label htmlFor="course">Selecionar Curso</label>
          <select id="course" name="course">
            <option value="python">Curso de Python</option>
            {/* Adicione mais opções conforme necessário */}
          </select>
        </div>
        <div className="period">Fevereiro 2024</div>
        <table className="calendar-table">
          <thead>
            <tr>
              <th>Domingo</th>
              <th>Segunda</th>
              <th>Terça</th>
              <th>Quarta</th>
              <th>Quinta</th>
              <th>Sexta</th>
              <th>Sábado</th>
            </tr>
          </thead>
          <tbody>
            {renderCalendar()}
          </tbody>
        </table>
      </main>
      {selectedDate && (
        <div className="popup">
          <div className="popup-content">
            <h2>Confirmar Presença</h2>
            <p>Deseja confirmar presença no dia {selectedDate.toDateString()}?</p>
            <button onClick={handleConfirmPresence}>Confirmar</button>
            <button onClick={() => setSelectedDate(null)}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Presenca;

import React, { useState } from 'react';
import { eachDayOfInterval, endOfMonth, format, startOfMonth, startOfWeek, endOfWeek, isSameDay } from 'date-fns';
import './Presenca.css';
import { Link } from 'react-router-dom';

function Presenca() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [presencas, setPresencas] = useState<{ [key: string]: boolean }>({});

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  const handleConfirmPresence = () => {
    if (selectedDate) {
      const dateKey = format(selectedDate, 'yyyy-MM-dd');
      setPresencas({ ...presencas, [dateKey]: true });
      setSelectedDate(null);
    }
  };

  const renderDay = (date: Date) => {
    const dateKey = format(date, 'yyyy-MM-dd');
    const isPresent = presencas[dateKey];
    const isToday = isSameDay(date, new Date());

    return (
      <div
        key={dateKey}
        className={`day ${isToday ? 'today' : ''} ${isPresent ? 'present' : ''}`}
        onClick={() => handleDateClick(date)}
      >
        {format(date, 'd')}
      </div>
    );
  };

  const renderCalendar = () => {
    const start = startOfWeek(startOfMonth(new Date(2024, 1)));
    const end = endOfWeek(endOfMonth(new Date(2024, 1)));
    const days = eachDayOfInterval({ start, end });

    return (
      <div className="calendar">
        {days.map(renderDay)}
      </div>
    );
  };

  return (
    <div className="presenca-container">
      <header className="main-header">
        <img src="/logo.svg" alt="Super Cursos Logo" className="main-logo" />
        <div className="header-icons">
          <Link to="/perfil"><img src="/perfil.svg" alt="Perfil" className="profile-icon" /></Link>
        </div>
      </header>
      <aside className="sidebar">
        <nav>
          <ul>
            <li><Link to="/home"><img src="/home.svg" alt="Home" className="icon" /></Link></li>
            <li><Link to="/financeiro"><img src="/financeiro.svg" alt="Financeiro" className="icon" /></Link></li>
            <li><Link to="/presenca"><img src="/presenca.svg" alt="Presença" className="icon" /></Link></li>
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
        <div className="calendar-header">
          <div>Domingo</div>
          <div>Segunda</div>
          <div>Terça</div>
          <div>Quarta</div>
          <div>Quinta</div>
          <div>Sexta</div>
          <div>Sábado</div>
        </div>
        {renderCalendar()}
      </main>
      {selectedDate && (
        <div className="popup">
          <div className="popup-content">
            <h2>Confirmar Presença</h2>
            <p>Deseja confirmar presença no dia {format(selectedDate, 'dd/MM/yyyy')}?</p>
            <button onClick={handleConfirmPresence}>Confirmar</button>
            <button onClick={() => setSelectedDate(null)}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Presenca;

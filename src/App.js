import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (!birthDate) return;

    const birth = new Date(birthDate);
    const today = new Date();
    let calculatedAge = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    // Ajustar se o aniversário ainda não aconteceu este ano
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      calculatedAge--;
    }

    setAge(calculatedAge);
  };

  return (
    <div className="app">
      <h1>Calculadora de Idade</h1>
      <input
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <button onClick={calculateAge}>Calcular Idade</button>
      {age !== null && (
        <h2>Sua idade é: {age} anos</h2>
      )}
    </div>
  );
};

export default App;
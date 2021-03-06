import React from 'react';
import './App.css';
import logo from './assets/logo.svg';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="Air cnc" />

      <div className="content">
        <p>
          Ofereça <strong>Spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
        </p>

        <form>
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" placeholder="Seu Melhor Email" />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;

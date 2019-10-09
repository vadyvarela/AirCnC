import React from 'react';
import api from './services/api';
import './App.css';
import logo from './assets/logo.svg';

function App() {

  function handleSubmit() {
console.log("TESTETETTETE")
  }

  return (
    <div className="container">
      <img src={logo} alt="Air cnc" />

      <div className="content">
        <p>
          Ofereça <strong>Spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input type="email" id="email" placeholder="Seu Melhor Email" />
          <button className="btn" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;

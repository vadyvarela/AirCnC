import React from 'react';

export default function Login() {
    return (
        <p>
          Ofereça <strong>Spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Seu Melhor Email"
            value={email}
            onChange={event => setEmail(event.target.value)} 
          />
          <button className="btn" type="submit">Entrar</button>
        </form>
    )
}
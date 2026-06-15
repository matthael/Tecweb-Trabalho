import React from 'react';
import '../styles.css';

const Home = () => {
  return (
    <div className="container home-container">
      <div className="hero-section">
        <h1>Sua Agenda <span>Moderna</span></h1>
        <p>Gerencie seus contatos e usuários de forma limpa, rápida e intuitiva.</p>
      </div>

      <div className="features-grid">
        <a href="/cadastro" className="feature-card">
          <h3>➕ Cadastrar Usuário</h3>
          <p>Adicione novas pessoas ao seu banco de dados local instantaneamente.</p>
        </a>
        <a href="/listagem" className="feature-card">
          <h3>📋 Ver Listagem</h3>
          <p>Consulte todos os usuários salvos na API e integrados ao sistema.</p>
        </a>
      </div>
    </div>
  );
};

export default Home;
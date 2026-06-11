import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Listagem from './pages/Listagem';
import { UserProvider } from "./context/UserContext"; 
import "./styles.css";
import React from 'react';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <header className="navbar">
          <h1>Sistema React</h1>
          
          <nav className="nav-links">
            <Link to="/">Início</Link>
            <Link to="/cadastro">Cadastro</Link>
            <Link to="/listagem">Listagem</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/listagem" element={<Listagem />} />
        </Routes>

      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
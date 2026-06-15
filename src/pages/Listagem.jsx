// src/pages/Listagem.jsx
import React, { useEffect, useState, useContext } from 'react';
import { getUsuarios } from '../services/api'; // Puxa as funções do arquivo api.js
import EventCard from '../components/EventCard';
import { UserContext } from '../context/UserContext'; // Contexto global do grupo
import '../styles.css';

const Listagem = () => {
  // Puxa a lista do formulário local via contexto global
  const { usuarios } = useContext(UserContext); 

  // Estados para os dados vindos do json-server
  const [apiUsers, setApiUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Busca os dados da API assim que a tela abre
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getUsuarios();
      setApiUsers(data);
      setLoading(false);
    };

    fetchAPI();
  }, []);

const listaLocal = Array.isArray(usuarios) ? usuarios : [];
const listaApi = Array.isArray(apiUsers) ? apiUsers : [];

const todosUsuarios = [...listaLocal, ...listaApi];

  return (
    <div className="list-container">
      <h2>Listagem de Usuários Cadastrados</h2>
      
      {loading ? (
        <p className="loading-text">Carregando dados da API...</p>
      ) : todosUsuarios.length === 0 ? (
        <p className="loading-text">Nenhum usuário cadastrado até o momento.</p>
      ) : (
        <div className="events-grid">
          {/* Mapeia a lista inteira combinada nos cartões visuais */}
          {todosUsuarios.map((usuario, index) => (
            <EventCard 
              key={usuario.id || `local-${index}`} 
              title={usuario.nome} 
              body={`E-mail: ${usuario.email} | Cidade: ${usuario.cidade}`} 
              date={`📞 ${usuario.telefone}`} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Listagem;
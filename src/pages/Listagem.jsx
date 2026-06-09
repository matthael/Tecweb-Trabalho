import React, { useEffect, useState } from 'react';
import { getEvents } from '../services/api';
import EventCard from '../components/EventCard';
import '../styles.css';

const Listagem = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const fetchAPI = async () => {
      const data = await getEvents();
      setEvents(data);
      setLoading(false);
    };

    fetchAPI();
  }, []);

  return (
    <div className="list-container">
      <h2>Calendário de Eventos</h2>
      
      {loading ? (
        <p>Carregando eventos...</p>
      ) : (
        <div className="events-grid">
          {/* Uso obrigatório do map() para listagem dinâmica */}
          {events.map((evento) => (
            <EventCard 
              key={evento.id} 
              title={evento.title} 
              body={evento.body} 
              date="15 de Nov, 2023" // Dado fictício caso a API de teste não tenha
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Listagem;
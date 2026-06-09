import React from 'react';
import '../styles.css'; // Importando o CSS que faremos depois

const EventCard = ({ title, body, date }) => {
  return (
    <div className="event-card">
      <div className="event-date">{date || "Data a definir"}</div>
      <h3 className="event-title">{title}</h3>
      <p className="event-description">{body}</p>
    </div>
  );
};

export default EventCard;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EventDashboard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then(setEvents);
  }, []);

  return (
    <div style={StyleSheet.container}>
      <h1>Upcoming Events</h1>
      <div style={StyleSheet.grid}>
        {events.map((event) => (
          <div key={event._id} style={StyleSheet.card}>
            <h2>{event.name}</h2>
            <p>{event.description}</p>
            <p>
              <strong>Date:</strong>
              {new Date(event.date).toLocaleString()}
            </p>
            <Link to={`/event/${event._id}`} style={StyleSheet.button}>
              View Event
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { padding: "20px", textAlign: "center" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  card: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    background: "#f9f9f9",
  },
  button: {
    display: "inline-block",
    padding: "10px",
    background: "#007bff",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
  },
};

export default EventDashboard;

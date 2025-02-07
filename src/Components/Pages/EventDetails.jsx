import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import socket from "../../socket.js";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    fetch(`/api/events/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
        setAttendees(data.attendees);
      });

    socket.on("updateAttendees", ({ eventId, userId }) => {
      if (eventId === id && !attendees.includes(userId)) {
        setAttendees((prev) => [...prev, userId]);
      }
    });

    return () => {
      socket.off("updateAttendees");
    };
  }, [id, attendees]);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {event && (
        <>
          <h1>{event.name}</h1>
          <p>{event.description}</p>
          <p>
            <strong>Date:</strong> {new Date(event.date).toLocaleString()}
          </p>
          <h3>Attendees: {attendees.length}</h3>
        </>
      )}
    </div>
  );
};

export default EventDetails;

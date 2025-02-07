import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to EventHub</h1>
      <p>Discover and manage events effortlessly.</p>
      <Link to="/dashboard" style={styles.button}>
        Explore Events
      </Link>
    </div>
  );
};

const styles = {
  button: {
    padding: "10px",
    background: "#007bff",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
  },
};
export default Home;

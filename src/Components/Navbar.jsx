import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h2>
        <Link to="/" style={styles.link}>
          EventHub
        </Link>
      </h2>
      <div>
        <Link to="/dashboard" style={styles.link}>
          Dashboard
        </Link>
        <Link to="/login" style={styles.link}>
          Login
        </Link>
      </div>
    </nav>
  );
};
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    background: "#333",
    colour: "#fff",
  },
  link: { color: "#fff", textDecoration: "none", margin: "0 10px" },
};

export default Navbar;

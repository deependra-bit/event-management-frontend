import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home";
import EventDashboard from "./Components/Pages/EventDashboard";
import EventDetails from "./Components/Pages/EventDetails";
import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<EventDashboard />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;

// src/App.jsx
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Barradenavegacion from "./components/barraDeNavegacion";
import Layout from "./Layout";
import Dashboard from "./Dashboard";
import Settings from "./Settings";

const App = () => {
  return (
    <Router>
      <Barradenavegacion />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default App;

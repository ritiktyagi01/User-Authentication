import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

export default function App() {
  return (
    <Router>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/register" style={{ marginRight: "10px" }}>
          Register
        </Link>
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* Default route */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

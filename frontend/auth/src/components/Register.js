import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/signup", {
        name,
        email,
        password,
      });
      setMessage(res.data.message || "Registration successful!");
    } catch (err) {
      setMessage(err.response?.data?.message || "Registration failed!");
    }
  };

  return (
    <div
      style={{
        maxWidth: "350px",
        margin: "60px auto",
        padding: "25px",
        background: "#fff",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ marginBottom: "20px", color: "#333" }}>Register</h2>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            margin: "8px 0",
            border: "1px solid #ccc",
            borderRadius: "6px",
            fontSize: "14px",
          }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            margin: "8px 0",
            border: "1px solid #ccc",
            borderRadius: "6px",
            fontSize: "14px",
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            margin: "8px 0",
            border: "1px solid #ccc",
            borderRadius: "6px",
            fontSize: "14px",
          }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#4a90e2",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "15px",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#357ab8")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4a90e2")}
        >
          Register
        </button>
      </form>

      {message && <p style={{ marginTop: "15px", color: "#d9534f" }}>{message}</p>}
    </div>
  );
}

import React, { useState } from "react";
import "./login.css";

const Login = ({ setUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/api/authenticate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (res.status === 200) {
        const { token } = await res.json();
        localStorage.setItem("token", token);
        setUser(user);
      } else {
        const { message } = await res.json();
        alert(message);
      }
    } catch (err) {
      alert("An error occurred while logging in");
    }
  };
  
  return (
    <>
      <div className="container">
        <div className="sub_container">
          <h1 className="header">Sign In</h1>
          <div className="form_container">
            <input
              placeholder="Name"
              className="input_container"
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Email"
              className="input_container"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              className="input_container"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={loginUser} className="btn" type="submit">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

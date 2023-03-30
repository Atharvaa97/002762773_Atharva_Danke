import React, { useState } from "react";
import "./login.css";

const Login = ({ setUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then((res) => {
        if (res.status === 409) {
          res.json()
            .then((user) => setUser(user))
            .catch((err) => alert(err));
        } else if (res.status === 409) {
          alert("User already exists");
        } else {
          alert("Invalid Credentials");
        }
      })
      .catch((err) => {
        alert("Invalid email or password");
      });
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

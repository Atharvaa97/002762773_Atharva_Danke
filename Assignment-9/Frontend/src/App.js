import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./App/About/About";
import Contact from "./App/Contact/Contact";
import Home from "./App/Home/Home";
import Job from "./App/Job/Job";
import Login from "./App/Login/Login";

function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      {user ? (
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/jobs" element={<Job />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      ) : (
        <Login setUser={setUser} />
      )}
    </Router>
  );
}

export default App;

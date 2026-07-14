import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"; 
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Boards from "./pages/Boards";
import SIP from "./pages/SIP";

function App() {
  return (
    <Router basename="/my-portfolio">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sip" element={<SIP/>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/boards" element={<Boards />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

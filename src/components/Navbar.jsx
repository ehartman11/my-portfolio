import React from "react";
import { Link } from "react-router-dom";
import "../css/components/navbar.css";

function Navbar() {
    return (
        <nav className="site-nav">
            <h2 className="site-logo">Ethan Hartman</h2>
            <div className="site-links">
                <Link to="/" className="site-link">Home</Link>
                <Link to="/sip" className="site-link">SIP</Link>
                <Link to="/projects" className="site-link">Projects</Link>
                <Link to="/boards" className="site-link">Boards</Link>
                <Link to="/contact" className="site-link">Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={styles.navbar}>
            <h2 style={styles.logo}> My Portfolio </h2>
            <div style={styles.links}>
                <Link to="/" style={styles.link}> Home </Link>
                <Link to="/sip" style={styles.link}> SIP </Link>
                <Link to="/projects" style={styles.link}> Projects </Link>
                <Link to="/boards" style={styles.link}> Boards </Link>
                <Link to="/contact" style={styles.link}> Contact </Link>
            </div>
        </nav>
    );
}

const styles = {
    navbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#333",
        padding: "15px 30px",
        color: "white"
    },

    logo: {
        margin: 0
    },

    links: {
        display: "flex",
        gap: "20px"
    },

    link: {
        color: "white",
        textDecoration: "none",
        fontSize: "18px"
    }
};

export default Navbar;
import React from 'react';
import desktopImage from "../assets/desktop.jpg";
import "../css/pages/boards.css";

function Boards() {
    return (
        <main className="page-shell image-page boards-page" style={{ backgroundImage: `url(${desktopImage})` }}>
            <header className="page-hero">
                <h1 className="page-title">B.S. Advancing Computer Science</h1>
                <p className="page-subtitle">
                    Program objectives connected to software development, data-driven solutions, and multi-platform implementation.
                </p>
            </header>

            <section className="content-panel">
                <h2> Objectives </h2> 
                <ul>
                    <li> Document the software Development process to analyze a problem and to design, build, and test software solutions </li>
                    <li> Demonstrate software development skills using more than one programming language and development environment </li>
                    <li> Implement data-driven solutions </li>
                    <li> Design and implement software solutions for multiple platforms including mobile devices </li>
                    <li> Design, develop, and maintain object-oriented software solutions utilizing inheritence, encapsulation, polymorphism, and abstraction </li>
                    <li> Within software solutions, describe, implement, and analyze data structure techniques </li>
                </ul>
            </section>
        </main>
    );
}

export default Boards;

import React from 'react';

function Boards() {
    return (
        <div styles={styles.container}>
            <header style={styles.header}>
                <h1> Advancing Computer Computer Science Degree Objectives </h1>
            </header>

            <section style={styles.section}>
                <h2> Featured Projects </h2> 
                <ul>
                    <li> Document the software Development process to analyze a problem and to design, build, and test software solutions </li>
                    <li> Demonstrate software development skills using more than one programming language and development environment </li>
                    <li> Implement data-driven solutions </li>
                    <li> Design and implement software solutions for multiple platforms including mobile devices </li>
                    <li> Design, develop, and maintain object-oriented software solutions utilizing inheritence, encapsulation, polymorphism, and abstraction </li>
                    <li> Within software solutions, describe, implement, and analyze data structure techniques </li>
                </ul>
            </section>
        </div>
    );
}

const styles = {
    container: {
        textAlign: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif"
    },

    header: {
        backgroundColor: "#282c34",
        color: "white",
        padding: "40px",
        borderRadius: "8px"
    },

    section: {
        margin: "20px auto",
        padding: "20px",
        maxWidth: "600px",
        textAlign: "left",
        backgroundColor: "#f4f4f4",
        borderRadius: "8px"
    }
};

export default Boards;
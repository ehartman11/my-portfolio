import React from 'react';

function Home() {
    return (
        <div styles={styles.container}>
            <header style={styles.header}>
                <h1> Welcome to my portolio </h1>
                <p> Showcasing my projects and achievements in Computer Science </p>
            </header>

            <section style={styles.section}>
                <h2> About Me </h2>
                <p> 
                Hi! I'm Ethan Hartman, a passionate software developer in training, 
                specializing in full-stack development, embedded programming, and data analytics.
                <br/><br/>
                Currently serving as an enlisted sailor in the U.S. Navy, I have spent the last 
                10 years operating, maintaining, and training students on submarine nuclear power plants. 
                This experience has given me an in-depth understanding of current and emerging 
                technologies in the field.
                <br/><br/>
                My vision is to merge my expertise in software development with my background 
                in nuclear operations to design and build innovative solutions for chemical and 
                radiological technicians. My goal is to enhance efficiency, improve equipment, 
                and optimize work practices, allowing technicians to focus on more critical 
                aspects of their work and life.  
                </p>
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

export default Home;